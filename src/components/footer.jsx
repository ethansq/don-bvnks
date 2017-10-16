import React, { Component } from "react";
var FontAwesome = require('react-fontawesome');
const contentJson = require('../content/main.json');
const dictionary = require('../content/dictionary.json');

export default class Footer extends React.Component {
    constructor() {
        super();

        this.state = {
            subscribeEmail: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            subscribeEmail: event.target.value
        });
    }

    handleSubmit(event) {
        alert("Email was submitted: "+this.state.value);
        event.preventDefault();
    }

    renderSocialMediaIcon(name) {
        var iconName = dictionary[name];
        if (iconName) {
            return (
                <a className="icon-anchor" href="" key={name}>
                    <div className="icon-wrapper">
                        <FontAwesome
                            size='2x'
                            inverse={true}
                            name={iconName} />
                    </div>
                </a>
            );
        } else {
            console.log("Error> Cannot find icon for "+name);
            return null;
        }
    }

    renderFooterLink(i, name) {
        return (
            <a href="" key={i}>{name}</a>
        );
    }

    render() {
        // FOOTER LINKS
        var footerLinks = contentJson.footerLinks;
        var n = Object.keys(footerLinks).length;
        var links = [];
        for (var i=0; i<n; i++) {
            links[i] = this.renderFooterLink(i, footerLinks[Object.keys(footerLinks)[i]]);
        }

        // SOCIAL MEDIA ICONS
        var socialMediaIcons = [];
        var socialMediaIconsJson = contentJson.socialMediaLinks;
        var numIcons = Object.keys(socialMediaIconsJson).length;
        for (var i=0; i<n; i++) {
            socialMediaIcons[i] = this.renderSocialMediaIcon(
                Object.keys(socialMediaIconsJson)[i]
            );
        }

        return (
            <footer>
                <div className="brand">
                    don-bvnks
                </div>
                <div className="content">
                    <div className="links">{links}</div>
                    <div className="subscribe">
                        <label htmlFor="subscribeEmail">Subscribe</label>
                        <form onSubmit={this.handleSubmit}>
                            <input placeholder="EMAIL ADDRESS" id="subscribeEmail" type="email" value={this.state.subscribeEmail} onChange={this.handleChange} />
                            <button type="submit" className="subscibe-submit-button arrow" value="Submit" />
                        </form>
                    </div>
                    <div className="social-media-links">
                        {socialMediaIcons}
                    </div>
                </div>
            </footer>
        );
    }
}