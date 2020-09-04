import React, { Component } from "react";
import {makeIcon} from "./About"
import Typical from "react-typical";
import AnchorLink from "react-anchor-link-smooth-scroll";
import $ from "jquery";
export default class WelcomeSlide extends Component {
  constructor(props) {
    super(props);
  }

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
      <section id="welcome" className="welcome slide">
        <div className="context">
          <div style={{ textAlign: "center" }}>
          {/* <div class="container">
  <div className="row">
    <div className="col-sm">
      One of three columns
    </div>
    <div className="col-sm">
      One of three columns
    </div>
    </div>
    </div> */}
            <img className="welcome-img" src="dg.png" alt="David Golding" />
            <h1>David Golding</h1>
            {/* <h2></h2> */}
            {/* <Typical className="h2" style={{color: "white"}}
        steps={['Student', 3000, 'Developer', 3000, 'Creator', 3000]}
        loop={Infinity}
        wrapper="p"
      /> */}
            {/* <h2>Final Year Computer Science Student</h2> */}
            <h2>University of Warwick</h2>

            

            {/* <div style={{width: "100%", margin: "0 auto"}}> */}
            <div className="show-more-container">
              <div>
                <AnchorLink offset="50" href={"#about"} className="show-more">
                  Show More
                </AnchorLink>
              </div>
            </div>

            {/* </div> */}
            {/* <a
          className={
            "carousel-control-next make-visible"
          }
          role="button"
          href={"#about"}
        >
          <span
            aria-hidden="true"
            className="carousel-control-next-icon"
          ></span>
          <span className="sr-only">Next</span>
        </a> */}
          </div>
        </div>

        {/* <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div > */}
<div className="socials">
                {github}
                {linkedin}
              </div>
      </section>
    );
  }
}
