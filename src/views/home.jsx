import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import NavigationBar from '../components/navigation-bar';
import Jumbotron from '../components/jumbotron';
import ContentMain from '../components/content-home';
import Footer from '../components/footer';

export default class Home extends React.Component {
    componentDidMount() {
        browserHistory.push('/');
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <Jumbotron />
                <ContentMain />
                <Footer />
            </div>
        );
    }
}