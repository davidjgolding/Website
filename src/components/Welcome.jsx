import React, { Component } from "react";
import { makeIcon } from "./About";
import AnchorLink from "react-anchor-link-smooth-scroll";
import $ from "jquery";
import Div100vh from "react-div-100vh";

export default class WelcomeSlide extends Component {

  hideNavIfShown() {
    if ($("#basic-navbar-nav").hasClass("show")) {
      this.hideNav();
      $(".experience-anchor-button").removeClass("disable-click");
    }
  }

  hideNav() {
    $(".navbar-toggler")[0].click();
  }

  render() {
    const github = makeIcon(
      "GitHub-Mark-Light-120px-plus.png",
      "GitHub",
      "https://github.com/davidjgolding/",
      40,
      "contact-logos"
    );
    const linkedin = makeIcon(
      "linkedin.svg",
      "LinkedIn",
      "https://www.linkedin.com/in/davidjgolding/",
      40,
      "contact-logos"
    );

    return (
      <Div100vh id="welcome" className="welcome slide">
        <div className="welcome-container">
          <div style={{ textAlign: "center" }}>
            <img className="welcome-img" src="dg.jpg" alt="David Golding" />
            <h1>David Golding</h1>
            <h2>University of Warwick</h2>
            <div className="show-more-container">
              <div>
                <AnchorLink offset="53" href={"#about"} className="show-more">
                  Show More
                </AnchorLink>
              </div>
            </div>
          </div>
        </div>
        <div className="socials">
          {github}
          {linkedin}
        </div>
      </Div100vh>
    );
  }
}
