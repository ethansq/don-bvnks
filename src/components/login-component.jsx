import React, { Component } from "react";
import ReactDOM from 'react-dom';

export default class LoginComponent extends React.Component {
    constructor() {
        super();
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
	            	<span>s</span>
	            </div>
            </div>
        );
    }
}