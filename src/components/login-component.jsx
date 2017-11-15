import React, { Component } from "react";
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
var FontAwesome = require('react-fontawesome');

/**
 * Initialize FacebookAuthProvider
 */
var provider = new firebase.auth.FacebookAuthProvider();
provider.addScope('user_birthday');
provider.setCustomParameters({
	'display': 'popup'
});

export default class LoginComponent extends React.Component {
    constructor() {
        super();

        this.state = {
        	"inputEmail": "",
        	"inputPassword": ""
        }

        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleInputEmailChange = this.handleInputEmailChange.bind(this);
        this.handleInputPasswordChange = this.handleInputPasswordChange.bind(this);
        this.triggerFacebookLogin = this.triggerFacebookLogin.bind(this);
    }

    handleInputEmailChange(event) {
        this.setState({
            inputEmail: event.target.value
        });
    }

    handleInputPasswordChange(event) {
        this.setState({
            inputPassword: event.target.value
        });
    }

    handleLoginSubmit(event) {
    	console.log("handleLoginSubmit");
    }

    componentWillMount() {
        console.log("login-component> componentWillMount");
    }

    /**
	 * Trigger Firebase Facebook Auth using a pop-up
	 * TODO: On mobile, redirection is the preferred method
	 */
	triggerFacebookLogin() {
		console.log("navigation-bar.jsx> triggerFacebookLogin");

		firebase.auth().signInWithRedirect(provider);
		firebase.auth().getRedirectResult().then((result) => {
			console.log("Sign in> Success");

			if (result.credential) {
				// This gives you a Facebook Access Token. You can use it to access the Facebook API.
				var token = result.credential.accessToken;
				// ...
			}

			// The signed-in user info.
			var user = result.user;

			console.log(firebase.auth().currentUser.displayName);

		}).catch(function(error) {
			console.log("Sign in> Failure> Error");
			console.log(error);
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// The email of the user's account used.
			var email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			var credential = error.credential;
		});
	}

    render() {
    	var showComponent = this.props.isOpen ? "show" : "hide";
    	var doneAnimating = this.props.doneAnimating ? "done" : "animating";

        return (
        	<div>
	        	<div
	        		onClick={this.props.onToggleLoginComponent}
	        		className={"login-component-background "+showComponent+" "+doneAnimating}>
        		</div>
	            <div id="login-component" className={showComponent+" "+doneAnimating}>
                    <div
                    	onClick={this.props.onToggleLoginComponent}
                    	className="close-button">
                    	<FontAwesome
	                        inverse={true}
	                        name="chevron-right" />
                    </div>
                    <div className="content">
                        <div onClick={this.triggerFacebookLogin} className="login-btn fb-login">
                            <FontAwesome
                                size='2x'
                                inverse={true}
                                name="facebook-official" />
                            <div className="login-text fb-text">Log in With Facebook</div>
                        </div>
                        <div className="login-btn google-login">
                            <FontAwesome
                                size='2x'
                                inverse={true}
                                name="google-plus" />
                            <div className="login-text google-text">Log in With Google</div>
                        </div>
                    </div>
                    <div className="privacy-policy">
                        Privacy Policy
                    </div>
	            </div>
            </div>
        );
    }
}