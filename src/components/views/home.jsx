import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

/*
Navigation bar
*/
class NavBar extends React.Component {
    render() {
        return (
            <div id="nav-bar">
                <div className="main-icon">
                    <img src="./" />
                </div>
            </div>
        );
    }
}

/*
Main contents
*/
class Content extends React.Component {
    render() {
        return (
            <div>
                Home
            </div>
        );
    }
}

export default class Home extends React.Component {
    componentDidMount() {
        browserHistory.push('/');
    }

    render() {
        return (
            <div>
                <NavBar />
                <Content />
            </div>
        );
    }
}