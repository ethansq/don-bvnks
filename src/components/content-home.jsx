import React, { Component } from "react";
import ReactHtmlParser from 'react-html-parser';

const contentJson = require('../content/main.json');
const bookingsJson = contentJson.bookings;
const storeJson = require('../content/store.json');

export default class ContentMain extends React.Component {
	constructor() {
		super();

		this.state = {
		};
	}

	renderCallout(i, name, href) {
		return (
            <a key={i} className="callout-pill-wrapper" href={href}><div className="callout-pill">{name}</div></a>
        );
	}

    renderBookingDate(i, bookingDateJson) {
        return (
            <div key={i} className="booking-date-wrapper">
                <span className="booking-name">{bookingDateJson.name},&nbsp;</span>
                <span className="booking-location">{bookingDateJson.city+", "+bookingDateJson.state},&nbsp;</span>
                <span className="booking-date">{bookingDateJson.date}</span>
                <div className="booking-callouts">
                    <a className="booking-callout" href={bookingDateJson.moreInfo}>
                        <div>TICKETS/INFO</div>
                    </a>
                    <a className="booking-callout" href={bookingDateJson.moreInfo}>
                        <div>VIP</div>
                    </a>
                </div>
            </div>
        );
    }

    // Generate Store feature items
    renderStoreFeaturesItem(i) {
        const item = storeJson.items[i];
        return (
            <div key={i} className="item-wrapper">
                <img src={require("../res/image-sq.png")} />
                <div className="item-name">{item.name}</div>
                <a className="callout" href={item.calloutLink} target="_blank">
                    <div>PURCHASE</div>
                </a>
            </div>
        );
    }

    // Generate Store feature-section content
    renderStoreFeatures(size) {
        var items = [];
        for (var i=0; i<size; i++) {
            items[i] = this.renderStoreFeaturesItem(i);
        }

        return (
            <div className={"wrapper size-"+size}>
                {items}
            </div>
        );
    }

	innerHtml(str) {
		return ReactHtmlParser(str);
	}

    render() {
    	var calloutsJson = contentJson.calloutLinks;
    	var numCallouts = Object.keys(calloutsJson).length;
    	var callouts = [];
    	for (var i=0; i<numCallouts; i++) {
    		callouts[i] = this.renderCallout(
    			i,
    			Object.keys(calloutsJson)[i],
    			calloutsJson[Object.keys(calloutsJson)[0]]
			);
    	}

        var bookingsDates = [];
        var numDates = bookingsJson.length;
        for (var i=0; i<numDates; i++) {
            bookingsDates[i] = this.renderBookingDate(i, bookingsJson[i]);
        }

        var storeFeatureItems = this.renderStoreFeatures(3);

        return (
        	<div className="home container">
                <section id="video-feature">
            		<h1 className="header">{contentJson.header}</h1>
            		<h3 className="description">{this.innerHtml(contentJson.description)}</h3>
            		<div className="callout-wrapper">
            			<div className="label">STREAM LINKS</div>
            			<div className="callouts">{callouts}</div>
            		</div>
    	        	<div className="video">
    					<iframe src="https://www.youtube.com/embed/SkeCUHypDso?rel=0" frameBorder="0" allowFullScreen></iframe>
    	        	</div>
                </section>
                <section id="bookings">
                    <h1 className="header">BOOKINGS</h1>
                    <div className="bookings-list">{bookingsDates}</div>
                </section>
                <section id="store-spotlight">
                    <h1 className="header">STORE FEATURES</h1>
                    {storeFeatureItems}
                </section>
                <section className="">

                </section>
        	</div>
        );
    }
}