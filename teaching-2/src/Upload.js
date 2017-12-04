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
			fileData: ""
			,check: "false"
		};
	}

	onUpload = (files) => {
		const reader = new FileReader();
		const file = files[0];
		reader.readAsDataURL(file);
		this.state.check = "true"
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
						{this.state.check}
					</div>
				</UploadField>
			</div>
		)
	}
}
//<img src = {this.state.fileData} />


export default Upload;
