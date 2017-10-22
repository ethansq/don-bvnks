import React, { Component } from "react";
import ReactHtmlParser from 'react-html-parser';

const contentJson = require('../content/main.json');
var bookingsJson = require('../content/bookings.json');
bookingsJson = bookingsJson.bookings;
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
        var hasVIP = bookingDateJson.vipLink == "" ? "no-vip" : "";

        return (
            <div key={i} className="booking-date-wrapper">
                <span className="booking-name">{bookingDateJson.name},&nbsp;</span>
                <span className="booking-location">{bookingDateJson.city+", "+bookingDateJson.state},&nbsp;</span>
                <span className="booking-date">{bookingDateJson.date}</span>
                <div className="booking-callouts">
                    <a className="booking-callout" href={bookingDateJson.moreInfo}>
                        <div>TICKETS/INFO</div>
                    </a>
                    <a className={"booking-callout "+hasVIP} href={bookingDateJson.moreInfo}>
                        <div>VIP</div>
                    </a>
                </div>
            </div>
        );
    }

    // Generate Store feature items
    renderStoreFeaturesItem(i) {
        const item = storeJson.items[i];
        // Parse the item name into separate lines

        return (
            <div key={i} className="item-wrapper">
                <div className="item-image-wrapper">
                    <img src={require("../res/image-sq.png")} />
                </div>
                <div className="hover-overlay"></div>
                <div className="name-overlay">
                    <span className="name">{item.name}</span>
                    <br/>
                    <span className="price">${item.price.toFixed(2)}</span>
                </div>
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

    componentWillMount() {
        const twitterScript = document.createElement("script");
        twitterScript.src = "https://platform.twitter.com/widgets.js";
        twitterScript.charset = "UTF-8";
        twitterScript.async = true;

        document.body.appendChild(twitterScript);
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

        var numStoreItems = 4;
        var storeFeatureItems = this.renderStoreFeatures(numStoreItems);

        return (
        	<div className="home container">
                <section id="video-feature"><div>
            		<h1 className="header">{contentJson.header}</h1>
            		<h3 className="description">{this.innerHtml(contentJson.description)}</h3>
            		<div className="callout-wrapper">
            			<div className="label">STREAM LINKS</div>
            			<div className="callouts">{callouts}</div>
            		</div>
    	        	<div className="video">
    					<iframe src="https://www.youtube.com/embed/SkeCUHypDso?rel=0" frameBorder="0" allowFullScreen></iframe>
    	        	</div>
                </div></section>
                <section id="bookings"><div>
                    <h1 className="header no-desc">BOOKINGS</h1>
                    <div className="bookings-list">{bookingsDates}</div>
                </div></section>
                <section id="store-spotlight"><div>
                    <h1 className="header no-desc">STORE</h1>
                    {storeFeatureItems}
                    <div className="more">
                        <a href="/store">Browse More</a>
                        <button href="/store" className="subscibe-submit-button arrow" value="Submit" />
                    </div>
                </div></section>
                <section id="social-media-widgets"><div>
                    <h1 className="header no-desc">SOCIAL MEDIA</h1>
                    <div className="twitter">
                    <a className="twitter-timeline" width="100%" height="450px" href="https://twitter.com/CB_DREAMSZ?ref_src=twsrc%5Etfw">Tweets by CB_DREAMSZ</a>
                    </div>
                    <div className="instagram">
                    </div>
                </div></section>
                <section id="share-us"><div>
                    <h1 className="header no-desc">SHARE US</h1>
                </div></section>
        	</div>
        );
    }
}