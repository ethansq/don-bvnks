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
				"BOOKING",
				"STORE",
				"BIO",
				"FANS"
			],
			isLoginComponentOpen: false,
			isOverlayNavComponentOpen: false
		}

		this.toggleOverlayNavComponent = this.toggleOverlayNavComponent.bind(this);
	}

	/*
	Not really a "toggle", but
	*/
	toggleOverlayNavComponent() {
		// let {isOverlayNavComponentOpen} = this.state

		// window.scrollY > this.prev ? !isHide && this.setState({isHide:true})
		// : isHide && this.setState({isHide:false})

		// this.prev = window.scrollY;
		console.log(window.scrollY);
		console.log(window.innerHeight);
		this.setState({
			isOverlayNavComponentOpen: window.scrollY >= window.innerHeight
		})
	}

    componentDidMount(){
		window.addEventListener('scroll', this.toggleOverlayNavComponent);
    }
    componentWillUnmount(){
		window.removeEventListener('scroll', this.toggleOverlayNavComponent);
    }

	toggleLoginWidget() {
	}

	toggleDrawerNav() {
	}

	renderLink(i) {
		return (
			<Link key={i} href={this.state.destinations[i]} />
		);
	}

    render() {
    	let showOverlayNav = this.state.isOverlayNavComponentOpen ? "overlay-show" : "overlay-hide";
    	
    	var links = [];
        for (var i=0; i < this.state.destinations.length; i++) {
        	links.push(this.renderLink(i));
        }

        return (
            <div id="nav-bar">
            	<div className="content main-nav">
	            	<div className="icon">
	            		<img src={require("../res/logo.png")} />
            		</div>
		            <div className="nav">
		            	{links}
		            	<span className="vertical-divider">I</span>
		            	<div className="pill enabled">Login</div>
					</div>
				</div>
            	<div className={"content overlay-nav "+showOverlayNav}>
	            	<div className="icon">
	            		<img src={require("../res/logo.png")} />
            		</div>
		            <div className="nav">
		            	{links}
		            	<span className="vertical-divider">I</span>
		            	<div className="pill enabled">Login</div>
					</div>
				</div>
            </div>
        );
    }
}