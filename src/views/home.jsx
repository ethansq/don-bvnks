import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import NavigationBar from '../components/navigationbar';
import Jumbotron from '../components/jumbotron';

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
                <Bookings />
            </div>
        );
    }
}