import React, { Component } from 'react';
import DropzoneComponent from 'react-dropzone-component';
import { UploadField } from '@navjobs/upload';
import { AppRegistry, Text } from 'react';

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
			percentage: NaN,
			prediction: "",
			numImages: NaN
		};
	}

	onUpload = (files) => {
		const reader = new FileReader();
		const file = files[0];
		reader.readAsDataURL(file);
		//this.state.prediction  = "dying"
		reader.onloadend = () => {
			this.state.fileData = reader.result;
			this.forceUpdate(); //forced rerender
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
						{this.state.fileData}
						{this.state.prediction.length > 0 &&
        					<h5> Model Prediction: {this.state.prediction} </h5>
						}
						
						<div style= { {marginTop:"300px"}} >
							<h5>Model Accuracy: {this.state.percentage} % </h5>
							<h5>Number of Images Classified: {this.state.numImages}</h5>
						</div>
					</div>
				</UploadField>
			</div>
		)
	}
}
//<img src = {this.state.fileData} />


export default Upload;
