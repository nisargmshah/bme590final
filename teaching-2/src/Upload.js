import React, { Component } from 'react';
import DropzoneComponent from 'react-dropzone-component';
import { UploadField } from '@navjobs/upload';
import { AppRegistry, Text } from 'react';
import axios from 'axios';

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
			percentage: 90,
			prediction: "",
			numImages: 10000,
		};
	}

	//Reason for .then; JS is asynchronous, so we're forcing it
	// to wait for us to do the function when post is complete
	// getData will take in fileData and 

	postRawData = () => {
		axios.post('http:', {fileData: this.state.fileData}).then( (response) => {
			console.log('Uploaded Successfully')
		});
	}

	onUpload = (files) => {
		const reader = new FileReader();
		const file = files[0];
		reader.readAsDataURL(file);
		this.state.prediction  = "benign"
		reader.onloadend = () => {
			this.setState({fileData: reader.result});
			console.log(reader.result);
			
		}
	}

	render() {
		return(
			<div>
				<h2>Please upload your image to classify</h2>
				<UploadField onFiles ={this.onUpload}>
					<div>
						Upload
						<img src = {this.state.fileData} />
						{this.state.prediction.length > 0 &&
        					<h5> Model Prediction: {this.state.prediction} </h5>
						}
						{this.postRawData({fileData:this.state.fileData})}

						<div style= { {marginTop:"200px"}} >
							<h5>Model Accuracy: {this.state.percentage} % </h5>
							<h5>Number of Images Classified: {this.state.numImages}</h5>
						</div>
					</div>
				</UploadField>
			</div>
		)
	}
}
//{this.state.fileData}


export default Upload;
