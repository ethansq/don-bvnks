import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import NavigationBar from '../components/navigation-bar';
import Jumbotron from '../components/jumbotron';
import ContentMain from '../components/content-home';
import Footer from '../components/footer';
import LoginComponent from '../components/login-component';

export default class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            isLoginComponentOpen: false,
            loginComponentAnimationDone: true
        }

        this.toggleLoginComponent = this.toggleLoginComponent.bind(this);
    }

    toggleLoginComponent() {
        // Do nothing if animation is still on-going
        if (!this.state.loginComponentAnimationDone)
            return;

        this.setState({
            isLoginComponentOpen: !this.state.isLoginComponentOpen,
            loginComponentAnimationDone: false
        });
        setTimeout(() => {
            this.setState({
                loginComponentAnimationDone: true
            });
        }, 500);
    }

    componentDidMount() {
        browserHistory.push('/');
    }

    render() {
        return (
            <div>
                <NavigationBar
                    onToggleLoginComponent={this.toggleLoginComponent} />
                <Jumbotron />
                <ContentMain />
                <Footer
                    onToggleLoginComponent={this.toggleLoginComponent} />
                <LoginComponent
                    onToggleLoginComponent={this.toggleLoginComponent}
                    doneAnimating={this.state.loginComponentAnimationDone}
                    isOpen={this.state.isLoginComponentOpen} />
            </div>
        );
    }
}