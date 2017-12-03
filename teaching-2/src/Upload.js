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
	constructor() {
		super();
	}
	
	onUpload = (files) => {
		const reader = new FileReader();
		const file = files[0];
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			console.log(file);
		}
	}

	render() {
		return(
			<div>
				<h2>Please upload your image to classify</h2>
				<UploadField onFiles ={this.onUpload}>
					<div>
						Upload
					</div>
				</UploadField>
			</div>
		)
	}
}
export default Upload;
