import React, { Component } from "react";
import Slider from "react-slick";

function Slide(props) {
	return (
		<div className="container">
			<div className="title">don-bvnks</div>
		</div>
	);
}

export default class Jumbotron extends React.Component {
	constructor() {
		super();

		this.state = {
		};
	}

	renderSlide(i) {
		return (
			<Slide key={i} index={i} />
		);
	}

    render() {
	  	var settings = {
	    	dots:true,
	    	adaptiveHeight:false,
	    	autoplay:true,
	    	autoplaySpeed:3250,
	    	centerMode:true,
	    	draggable:false
	    };

	    var slides = [
	    	this.renderSlide(0),
	    	this.renderSlide(2),
	    	this.renderSlide(4),
	    	this.renderSlide(6)
	    ];
        
        return (
			<div id="jumbotron">
				<Slider {...settings}>
					<div className="container">
						<div className="title">don-bvnks</div>
					</div>
					<div className="container">
						<div className="title">don-bvnks</div>
					</div>
					<div className="container">
						<div className="title">don-bvnks</div>
					</div>
					<div className="container">
						<div className="title">don-bvnks</div>
					</div>
				</Slider>
			</div>
        );
    }
}