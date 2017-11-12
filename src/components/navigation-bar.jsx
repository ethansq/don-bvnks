import React, { Component } from "react";
const navigationJson = require("../content/navigation.json");

export default class NavigationBar extends React.Component {
	constructor() {
		super();

		this.state = {
			isOverlayNavComponentOpen: false
		}

		this.toggleOverlayNavComponent = this.toggleOverlayNavComponent.bind(this);
	}

	toggleOverlayNavComponent() {
		this.setState({
			isOverlayNavComponentOpen: window.scrollY >= 128
		})
	}

    componentDidMount() {
		window.addEventListener('scroll', this.toggleOverlayNavComponent);
    	
    }

    componentWillUnmount() {
		window.removeEventListener('scroll', this.toggleOverlayNavComponent);
    }

	renderLink(i, name, href) {
		return (
			<a className="pill-anchor" key={i} href={href}><div className="pill enabled">{name}</div></a>
		);
	}

    render() {
    	let showOverlayNav = this.state.isOverlayNavComponentOpen ? "overlay-show" : "overlay-hide";
    	
        // FOOTER LINKS
        var linksJson = navigationJson.navLinks;
        var n = Object.keys(linksJson).length;
        var links = [];
        for (var i=0; i<n; i++) {
            links[i] = this.renderLink(i, Object.keys(linksJson)[i], linksJson[Object.keys(linksJson)[i]]);
        }

        return (
            <div id="nav-bar">
            	<div className="content main-nav">
	            	<div className="icon" style={{display:"none"}}>
	            		<img src={require("../res/logo.png")} />
            		</div>
            		<div className="icon"><div>dB</div></div>
		            <div className="nav">
		            	{links}
		            	<span className="vertical-divider">I</span>
		            	<div onClick={this.props.onToggleLoginComponent} className="pill-anchor pill enabled">Login</div>
					</div>
				</div>
            	<div className={"content overlay-nav "+showOverlayNav}>
	            	<div className="icon" style={{display:"none"}}>
	            		<img src={require("../res/logo.png")} />
            		</div>
            		<div className="icon"><div>dB</div></div>
		            <div className="nav">
		            	{links}
		            	<span className="vertical-divider">I</span>
		            	<div onClick={this.props.onToggleLoginComponent} className="pill-anchor pill enabled">Login</div>
					</div>
				</div>
            </div>
        );
    }
}