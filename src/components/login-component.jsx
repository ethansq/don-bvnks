import React, { Component } from "react";
import ReactDOM from 'react-dom';
var FontAwesome = require('react-fontawesome');

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
	                        size='2x'
	                        inverse={false}
	                        name="chevron-right" />
                    </div>
                    <div className="content">
                        <form onSubmit={this.handleSubmit}>
                            <input placeholder="EMAIL ADDRESS" id="inputEmail" type="email" value={this.state.inputEmail} onChange={this.handleInputEmailChange} />
                            <input placeholder="PASSWORD" id="inputPassword" type="password" value={this.state.inputPassword} onChange={this.handleInputPasswordChange} />
                        	<div className="remember">
                        		<input id="remember-checkbox" type="checkbox" name="remember" value="true" />
                        		<label htmlFor="remember-checkbox">Remember me</label>
                    		</div>
                    		<div className="forgot">Forgot your password?</div>
                    		<input type="button" className="login-button" value="LOGIN" />
                        </form>
                    </div>
	            </div>
            </div>
        );
    }
}