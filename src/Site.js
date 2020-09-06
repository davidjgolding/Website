import React, { Component } from "react";
import WelcomeSlide from "./components/Welcome";
import ProjectSlide from "./components/Projects";
import ExperienceSlide from "./components/Experience";
import AboutSlide from "./components/About";
import Helmet from "react-helmet";
import { Navbar, Nav } from "react-bootstrap";
import Projects from "./data/projects.json";
import Experience from "./data/experience.json";
import Tags from "./data/tags.json";
import AnchorLink from "react-anchor-link-smooth-scroll";
import $ from "jquery";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.hideNav = this.hideNav.bind(this);
    this.hideNavIfShown = this.hideNavIfShown.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  navItem(id, className, href, item) {
    return (
      <AnchorLink
        id={id}
        className={className}
        offset={"53"}
        href={href}
        onClick={() => this.hideNavIfShown()}
      >
        {item}
      </AnchorLink>
    );
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

  toggleNav() {
    if ($("#basic-navbar-nav").hasClass("show")) {
      $(".experience-anchor-button").removeClass("disable-click");
    } else {
      $(".experience-anchor-button").addClass("disable-click");
    }
  }

  scroll() {
    const about = $(window).scrollTop() - $("#about").offset().top;
    const experience = $(window).scrollTop() - $("#experience").offset().top;
    const projects = $(window).scrollTop() - $("#projects").offset().top;

    if (projects > -200) {
      $("#nav-about").blur();
      $("#nav-experience").blur();
      $("#nav-about").removeClass("nav-active");
      $("#nav-experience").removeClass("nav-active");
      $("#nav-projects").addClass("nav-active");
    } else if (experience > -200) {
      $("#nav-about").blur();
      $("#nav-projects").blur();
      $("#nav-about").removeClass("nav-active");
      $("#nav-experience").addClass("nav-active");
      $("#nav-projects").removeClass("nav-active");
    } else if (about > -200) {
      $("#nav-experience").blur();
      $("#nav-projects").blur();
      $("#nav-about").addClass("nav-active");
      $("#nav-experience").removeClass("nav-active");
      $("#nav-projects").removeClass("nav-active");
    } else {
      $("#nav-about").blur();
      $("#nav-experience").blur();
      $("#nav-projects").blur();
      $("#nav-about").removeClass("nav-active");
      $("#nav-experience").removeClass("nav-active");
      $("#nav-projects").removeClass("nav-active");
    }
  }
  
  componentDidMount() {
    window.addEventListener("scroll", this.scroll);
  }

  render() {
    return (
      <div className="site-contents area">
        <Helmet bodyAttributes={{ style: "background-color : #111111" }} />
        <Navbar
          className="navbar navbar-default "
          variant="dark"
          expand="md"
          fixed="top"
          style={{ backgroundColor: "rgba(17,17,17,0.9)" }}
        >
          <div className="mobile-nav d-flex justify-content-between">
            {this.navItem(
              "nav-home",
              "navbar-brand",
              "#welcome",
              <h1 style={{ marginTop: "auto" }}>DAVID GOLDING</h1>
            )}
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={this.toggleNav}
            />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <div style={{ marginRight: "15px" }}>
                {this.navItem("nav-about", "nav-link", "#about", "About")}
              </div>
              <div style={{ marginRight: "15px" }}>
                {this.navItem(
                  "nav-experience",
                  "nav-link",
                  "#experience",
                  "Experience"
                )}
              </div>
              <div>
                {this.navItem(
                  "nav-projects",
                  "nav-link",
                  "#projects",
                  "Projects"
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="body-content" onClick={this.hideNavIfShown}>
          <div className="slide-container" style={{ opacity: "1" }}>
            <WelcomeSlide />
            <AboutSlide />
            <ExperienceSlide experience={Experience} />
            <ProjectSlide projects={Projects} tags={Tags} />
            <footer className="page-footer font-small">
              <div
                className="footer-copyright text-center py-3"
                style={{ backgroundColor: "#EF4E4E" }}
              >
                <p style={{ paddingBottom: 0, marginBottom: 0 }}>
                  © David Golding {new Date().getFullYear()}
                </p>
              </div>
            </footer>
          </div>
        </div>
        <div
          style={{ height: "100vh", position: "fixed", top: 0, width: "100%" }}
        >
          <div className="area">
            <ul className="circles">
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
          </div>
        </div>
      </div>
    );
  }
}
