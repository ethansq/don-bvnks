import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import NavigationBar from '../components/navigation_bar';
import Jumbotron from '../components/jumbotron';
import ContentMain from '../components/content_home';

class Bookings extends React.Component {
    render() {
        return (
            <div id="bookings">
                Tour Dates
                <div>
                    Monday
                    Tuesday
                    Wednesday
                    Thursday
                    Friday
                </div>
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
                <NavigationBar />
                <Jumbotron />
                <ContentMain />
            </div>
        );
    }
}