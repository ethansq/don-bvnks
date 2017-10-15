import React, { Component } from "react";

function Link(props) {
	return (
		<div className="pill enabled"><a href={props.href}>{props.href}</a></div>		
	);
}

export default class NavigationBar extends React.Component {
	constructor() {
		super();

		this.state = {
			destinations: [
				"/contact",
				"/merch",
				"/about",
				"/media"
			]
		}
		console.log(this.state.destinations.length);
	}

	renderLink(i) {
		return (
			<Link key={i} href={this.state.destinations[i]} />
		);
	}

    render() {
    	var links = [];
        for (var i=0; i < this.state.destinations.length; i++) {
        	links.push(this.renderLink(i));
        }

        return (
            <div id="nav-bar">
            	<div className="padding-wrapper">
	            	<div className="icon">
	            		<img src={require("../res/logo.png")} />
            		</div>
		            <div className="nav">
		            	{links}
		            	<div className="pill enabled">Login</div>
					</div>
				</div>
            </div>
        );
    }
}