import React, { Component } from "react";
import ReactHtmlParser from 'react-html-parser';

const contentJson = require('../content/content-home.json');
var bookingsJson = require('../content/bookings.json');
bookingsJson = bookingsJson.bookings;
const storeJson = require('../content/store.json');

export default class ContentMain extends React.Component {
	constructor() {
		super();

		this.state = {
		};
	}

    renderFeature() {
        const featureJson = contentJson.feature;
        var calloutsJson = featureJson.calloutLinks;
        var callouts = callouts = Object.keys(calloutsJson).map((key, i) => {
            return (
                <a key={i} className="callout-pill-wrapper" href={calloutsJson[key]}><div className="callout-pill">{key}</div></a>
            );
        })

        return (
            <section id="feature"><div>
                <h1 className="header">{featureJson.header}</h1>
                <h3 className="description">{ReactHtmlParser(featureJson.description)}</h3>
                <div className="callout-wrapper">
                    <div className="label">STREAM LINKS</div>
                    <div className="callouts">{callouts}</div>
                </div>
                <div className="video">
                    <iframe src="https://www.youtube.com/embed/SkeCUHypDso?rel=0" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div></section>
        );
    }

    renderMusicLinks() {
        return (
            <section id="music"><div>
                <h1 className="header no-desc">MUSIC</h1>
            </div></section>
        );
    }

    renderBookingDates() {
        // build/render content for each bookingDate item
        var bookingsDates = [];
        bookingsDates = bookingsJson.map((bookingDate, i) => {
            var hasVIP = bookingDate.vipLink == "" ? "no-vip" : "";
            return (
                <div key={i} className="booking-date-wrapper">
                    <span className="booking-name">{bookingDate.name},&nbsp;</span>
                    <span className="booking-location">{bookingDate.city+", "+bookingDate.state},&nbsp;</span>
                    <span className="booking-date">{bookingDate.date}</span>
                    <div className="booking-callouts">
                        <a className="booking-callout" href={bookingDate.moreInfo}>
                            <div>TICKETS/INFO</div>
                        </a>
                        <a className={"booking-callout "+hasVIP} href={bookingDate.moreInfo}>
                            <div>VIP</div>
                        </a>
                    </div>
                </div>
            );
        });

        return (
            <section id="bookings"><div>
                <h1 className="header no-desc">BOOKINGS</h1>
                <div className="bookings-list">{bookingsDates}</div>
            </div></section>
        );
    }

    renderStoreFeatures() {
        var numStoreItems = 4;
        var storeFeatureItems = storeJson.items.slice(0, numStoreItems).map((item, i) => {
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
        });

        return (
            <section id="store-spotlight" className="full-bleed"><div>
                <h1 className="header no-desc">STORE</h1>
                <div className={"wrapper size-"+numStoreItems}>
                    {storeFeatureItems}
                </div>
                <div className="more">
                    <a href="/store">Browse More</a>
                    <button href="/store" className="subscibe-submit-button arrow" value="Submit" />
                </div>
            </div></section>
        );
    }

    renderSocialMedia() {
        return (
            <section id="social-media-widgets" className="full-bleed"><div>
                <h1 className="header no-desc">SOCIAL MEDIA</h1>
                <div className="twitter">
                <a className="twitter-timeline" width="100%" height="450px" href="https://twitter.com/CB_DREAMSZ?ref_src=twsrc%5Etfw">Tweets by CB_DREAMSZ</a>
                </div>
                <div className="fb-embed">
                    <div className="fb-page" data-href="https://www.facebook.com/whosdatbvnks/" data-tabs="timeline" data-width="400" data-height="450" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-colorscheme="dark" data-show-facepile="false"><blockquote cite="https://www.facebook.com/whosdatbvnks/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/whosdatbvnks/">Don Bvnks Music</a></blockquote></div>
                </div>
            </div></section>
        );
    }

    renderShareUs() {
        return (
            <section id="share-us"><div>
                <h1 className="header no-desc">SHARE US</h1>
            </div></section>
        );
    }

    componentWillMount() {
        const twitterScript = document.createElement("script");
        twitterScript.src = "https://platform.twitter.com/widgets.js";
        twitterScript.charset = "UTF-8";
        twitterScript.async = true;

        document.body.appendChild(twitterScript);
    }

    render() {
        return (
        	<div className="home container">
                {this.renderFeature()}
                {this.renderMusicLinks()}
                {this.renderBookingDates()}
                {this.renderStoreFeatures()}
                {this.renderSocialMedia()}
                {this.renderShareUs()}
        	</div>
        );
    }
}