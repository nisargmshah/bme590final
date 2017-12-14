import React, { Component } from 'react';
import DropzoneComponent from 'react-dropzone-component';
import { UploadField } from '@navjobs/upload';
import { AppRegistry, Text } from 'react';
import axios from 'axios';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

var componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: true,
    postUrl: '/uploadHandler'
};

class Upload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fileData: "",
			prediction: "",
			benign_count: 0,
			malignant_count: 0,
		    benign_count_float: 0,
            malignant_count_float: 0.0,
            showCheckboxes: false,
            benign_percent: 0,
            malignant_percent: 0.0,
            total_count: 0.0,
            response_output: "Hi Nisarg",
		};
	}

	//Reason for .then; JS is asynchronous, so we're forcing it
	// to wait for us to do the function when post is complete
	// getData will take in fileData and 

	postRawData = () => {
		axios.post('http://vcm-1844.vm.duke.edu:8000/upload_image', {fileData: this.state.fileData}).then( (response) => {
			console.log(response)
			this.state.response_output = console.log(response)

		});
	}

	onUpload = (files) => {
		const reader = new FileReader();
		const file = files[0];
		reader.readAsDataURL(file);
		this.setState({total_count: this.state.total_count+1});
		this.state.prediction  = "benign";
		reader.onloadend = () => {
		    if(this.state.prediction == "benign") {
		        this.setState({benign_count: this.state.benign_count+1});
		    }
		    else if (this.state.prediction == "malignant") {
		        this.setState({malignant_count: this.state.malignant_count+1});
		    }
			    this.setState({fileData: reader.result});
			    console.log(reader.result);
		    }
		    this.setState({total_count: this.state.total_count+1});
	    }

	render() {
		return(
			<div>
			    <div style = { {textAlign: "center"}} >
				    <h2>Please upload your image to classify </h2>
				</div>
				<UploadField onFiles ={this.onUpload}>
					<div>
					    <div style = {{textAlign: "center"}} >
						    Click Here to Upload an Image
						</div>
						<div style = {{textAlign: "center"}} >
                            <img src = {this.state.fileData} />
                        </div>
						{this.state.prediction.length > 0 &&
						    <div style = {{textAlign: "center"}} >
        					    Model Prediction: {this.state.prediction}
        					    {this.state.response_output}
        					</div>
						}

                        <div>
                            <Table>
                            <TableHeader
                                adjustForCheckbox={this.state.showCheckboxes}
                                displaySelectAll={this.state.showCheckboxes}
                            >
                              <TableRow>
                                <TableHeaderColumn>Classification</TableHeaderColumn>
                                <TableHeaderColumn>Number Classified</TableHeaderColumn>
                              </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={this.state.showCheckboxes}>
                              <TableRow>
                                <TableRowColumn>Benign</TableRowColumn>
                                <TableRowColumn>{this.state.benign_count}</TableRowColumn>
                              </TableRow>
                               <TableRow>
                                <TableRowColumn>Malignant</TableRowColumn>
                                <TableRowColumn>{this.state.malignant_count}</TableRowColumn>
                              </TableRow>
                            </TableBody>
                          </Table>
                      </div>


						{this.postRawData({fileData:this.state.fileData})}


					</div>
				</UploadField>
			</div>
		)
	}
}

export default Upload;
