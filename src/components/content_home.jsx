import React, { Component } from "react";
import ReactHtmlParser from 'react-html-parser';
const contentJson = require('../content/main.json');

function Callout(props) {
	return(
		<a className="callout-pill-wrapper" href={props.href}><div className="callout-pill">{props.name}</div></a>
	);
}

export default class ContentMain extends React.Component {
	constructor() {
		super();

		this.state = {
		};
	}

	renderCallout(i, name, href) {
		return <Callout key={i} href={href} name={name} />
	}

	innerHtml(str) {
		return ReactHtmlParser(str);
	}

    render() {
    	var calloutsJson = contentJson.calloutLinks;
    	var numCallouts = Object.keys(calloutsJson).length;
    	var callouts = [];
    	for (var i=0; i<numCallouts; i++) {
    		callouts[i] = this.renderCallout(
    			i,
    			Object.keys(calloutsJson)[i],
    			calloutsJson[Object.keys(calloutsJson)[0]]
			);
    	}

        return (
        	<div className="home container">
        		<h1 className="header">{contentJson.header}</h1>
        		<h3 className="description">{this.innerHtml(contentJson.description)}</h3>
        		<div className="callout-wrapper">
        			<div className="label">STREAM LINKS</div>
        			<div className="callouts">{callouts}</div>
        		</div>
	        	<div className="video">
					<iframe src="https://www.youtube.com/embed/SkeCUHypDso?rel=0" frameBorder="0" allowFullScreen></iframe>
	        	</div>
        	</div>
        );
    }
}