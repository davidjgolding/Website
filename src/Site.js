import React, { Component } from "react";
import ProjectSlide from "./components/Projects";
import ExperienceSlide from "./components/Experience";
import WelcomeSlide from "./components/Welcome";
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
        offset={() => {
          if (window.innerWidth < 768) {
            return 165;
          } else {
            return 50;
          }
        }}
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
    const experience = $(window).scrollTop() - $("#experience").offset().top;
    if (experience < -600 || $(window).scrollTop() < 200) {
      $("#nav-experience").blur();
      $("#nav-projects").blur();
      $("#nav-experience").removeClass("nav-active");
      $("#nav-projects").removeClass("nav-active");
    } else if ($("#experience").offset().top - 600 > experience) {
      $("#nav-projects").blur();
      $("#nav-experience").addClass("nav-active");
      $("#nav-projects").removeClass("nav-active");
    } else {
      $("#nav-experience").blur();
      $("#nav-experience").removeClass("nav-active");
      $("#nav-projects").addClass("nav-active");
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.scroll);
  }

  render() {
    return (
      <div className="site-contents">
        <Helmet bodyAttributes={{ style: "background-color : #EAECEF" }} />
        <Navbar
          className="navbar navbar-default "
          bg="dark"
          variant="dark"
          expand="md"
          fixed="top"
          sticky="top"
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
              <div style={{ width: "100px", textAlign: "center" }}>
                {this.navItem(
                  "nav-experience",
                  "nav-link",
                  "#experience",
                  "Experience"
                )}
              </div>
              <div style={{ width: "80px", textAlign: "center" }}>
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
            <ExperienceSlide experience={Experience} />
            <ProjectSlide projects={Projects} tags={Tags} />
            <footer className="page-footer font-small">
              <div
                className="footer-copyright text-right py-3"
                style={{ paddingRight: "15px" }}
              >
                © David Golding {new Date().getFullYear()}
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
