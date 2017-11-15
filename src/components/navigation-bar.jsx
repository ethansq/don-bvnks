import React, { Component } from "react";
import * as firebase from 'firebase';
const navigationJson = require("../content/navigation.json");

export default class NavigationBar extends React.Component {
	constructor(props) {
		super(props);

		this.toggleOverlayNavComponent = this.toggleOverlayNavComponent.bind(this);
		this.handleAuthentication = this.handleAuthentication.bind(this);
		this.firebaseSignOut = this.firebaseSignOut.bind(this);

		/**
		 * Default state; we update "default" values when onAuthStateChanged
		 * is executed
		 */
		this.state = {
			isOverlayNavComponentOpen: false,
			isWaitingForAuth: true,
			isAuthenticated: false,
			currentUserName: ""
		};

		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				console.log("Constructor> authenticated");
				this.setState({
					isWaitingForAuth: false,
					isAuthenticated: true,
					currentUserName: user.displayName
				});
			} else {
				console.log("Constructor> not authenticated");
				this.setState({
					isWaitingForAuth: false
				});
			}
		});
	}

	toggleOverlayNavComponent() {
		this.setState({
			isOverlayNavComponentOpen: window.scrollY >= 128
		});
	}

	componentWillMount() {
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

	/**
	 * Scope-wise, this shouldn't be here
	 */
	firebaseSignOut() {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
			console.log("Sign out> success");
			this.setState({
				isAuthenticated: false,
				currentUserName: ""
			});
        }).catch(function(error) {
            console.log(error);
            // An error happened.
        });
	}
	
	handleAuthentication() {
		if (this.state.isAuthenticated) {
			this.firebaseSignOut();
		} else {
			this.props.onToggleLoginComponent();
		}
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
						<div className={"pill enabled loader-wrapper" + (this.state.isWaitingForAuth ? "" : " hidden")}>
							<div className="loader"></div>
						</div>
						<div
							className={"pill-anchor pill enabled" + (this.state.isWaitingForAuth || !this.state.isAuthenticated ? " hidden" : "")}>
							{this.state.isAuthenticated ? "Profile" : ""}
						</div>
						<div 
							onClick={this.handleAuthentication}
							className={"pill-anchor pill enabled" + (this.state.isWaitingForAuth ? " hidden" : "")}>
							{this.state.isAuthenticated ? "Sign Out" : "Login"}
						</div>
					</div>
				</div>
            	<div
					className={"content overlay-nav "+showOverlayNav}>
	            	<div className="icon" style={{display:"none"}}>
	            		<img src={require("../res/logo.png")} />
            		</div>
            		<div className="icon"><div>dB</div></div>
		            <div className="nav">
						{links}
		            	<span className="vertical-divider">I</span>
						<div className={"pill enabled loader-wrapper" + (this.state.isWaitingForAuth ? "" : " hidden")}>
							<div className="loader"></div>
						</div>
						<div
							className={"pill-anchor pill enabled" + (this.state.isWaitingForAuth || !this.state.isAuthenticated ? " hidden" : "")}>
							{this.state.isAuthenticated ? "Profile" : ""}
						</div>
						<div
							onClick={this.handleAuthentication}
							className={"pill-anchor pill enabled" + (this.state.isWaitingForAuth ? " hidden" : "")}>
							{this.state.isAuthenticated ? "Sign Out" : "Login"}
						</div>
					</div>
				</div>
            </div>
        );
    }
}