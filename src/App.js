import React, { Component } from "react";
import PortfolioSlide from "./components/Portfolio";
import ExperienceSlide from "./components/Experience";
import WelcomeSlide from "./components/Welcome";
import Helmet from "react-helmet";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Projects from "./data/projects.json";
import Experience from "./data/experience.json";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import './index.css';
import $ from "jquery";

export default class App extends Component {
  constructor(props) {
    super(props);
    // this.hideNav = this.hideNav.bind(this)
    this.hideNav = this.hideNav.bind(this);
    this.hideNavIfShown = this.hideNavIfShown.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  // hideNav() {
  //   if ($("#basic-navbar-nav").hasClass("show")) {
  //     $(".navbar-toggler")[0].click()
  //   }
  // }
  navItem(id, className, href, item) {
    return (
      <AnchorLink id={id} className={className} offset={() =>
        {if (window.innerWidth < 768) {
          return 165
        } else {
          return 50
        }}
      } href={href} onClick={ () => this.hideNavIfShown(id) }>
        {item}
      </AnchorLink>
    );
  }

  hideNavIfShown(id) {
    // $("#"+id).addClass("nav-active")
    if ($("#basic-navbar-nav").hasClass("show")) {
      this.hideNav();
      $(".experience-anchor-button").removeClass("disable-click");
    }
  }

  hideNav() {
    $(".navbar-toggler")[0].click();
  }

  toggleNav() {
    // window.removeEventListener('scroll', this.scroll)
    // $(".experience-anchor-button").addClass("disable-click")
    if ($("#basic-navbar-nav").hasClass("show")) {
      $(".experience-anchor-button").removeClass("disable-click");
    } else {
      $(".experience-anchor-button").addClass("disable-click");
    }
    // window.addEventListener('scroll', this.scroll)
  }

  scroll() {
    const experience = $(window).scrollTop() - $("#experience").offset().top
      console.log(experience)
      if (experience < -600 || $(window).scrollTop() < 200) {
        $("#nav-experience").blur()
        $("#nav-projects").blur()
        $("#nav-experience").removeClass("nav-active")
        $("#nav-projects").removeClass("nav-active")
      } else if ($("#experience").offset().top - 600 > experience) {
        $("#nav-projects").blur()

        $("#nav-experience").addClass("nav-active")
        $("#nav-projects").removeClass("nav-active")
        // $("#nav-experience").focus()
      } else {
        $("#nav-experience").blur()
        // $("#nav-projects").blur()
        $("#nav-experience").removeClass("nav-active")
        $("#nav-projects").addClass("nav-active")
      }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scroll)
  }

  render() {
    return (
      <div className="site-contents">
        {/* EAECEF */}
        <Helmet bodyAttributes={{ style: "background-color : #EAECEF" }} />
        {/* <div className="main-navbar"> */}
        <Navbar
          className="navbar navbar-default "
          bg="dark"
          variant="dark"
          expand="md"
          fixed="top"
          sticky="top"
        >
          <div className="mobile-nav d-flex justify-content-between">
            { this.navItem(
              "nav-home",
              "navbar-brand",
              "#root",
              <h1 style={{ marginTop: "auto" }}>DAVID GOLDING</h1>
            ) }

            {/* <AnchorLink class="navbar-brand" href="#root" onClick={this.hideNavIfShown}>
              <h1 style={{ marginTop: "auto" }}>DAVID GOLDING</h1>
            </AnchorLink> */}

            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={this.toggleNav}
            />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <div style={{width: "100px", textAlign: "center"}}>
            { this.navItem(
              "nav-experience",
              "nav-link",
              "#experience",
              "Experience"
            ) }
            </div>
            <div style={{width: "80px", textAlign: "center"}}>
            { this.navItem(
              "nav-projects",
              "nav-link",
              "#projects",
              "Projects"
            ) }
            </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="body-content" onClick={this.hideNavIfShown}>
          {
            /* <div style={{ height: "56px", backgroundColor: "#EAECEF" }}></div> */
            //fixed-top navbar-static-top
          }
          {/* <div className="main-contents" > */}
          {/* {position: "fixed",} */}
          {/* onClick={this.hideNav}  */}
          <div className="slide-container" style={{ opacity: "1" }}>
            <WelcomeSlide />
            <ExperienceSlide data={Experience} />
            <PortfolioSlide projects={Projects} />
            <footer class="page-footer font-small">
              <div
                class="footer-copyright text-right py-3"
                style={{ paddingRight: "15px" }}
              >
                © David Golding {(new Date()).getFullYear()}
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

// class App extends React.Component {

//   render() {
//     const { error, isLoaded } = this.state;
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//           <div>
//             <Helmet bodyAttributes={{style: 'background-color : #EAECEF'}}/>

//   <Navbar bg="dark" variant="dark">

//     <Navbar.Brand href="#home">
//       <h1>DAVID GOLDING</h1>
//     </Navbar.Brand>
//   </Navbar>
//             <ExperienceSlide/>
//             <PortfolioSlide projects={Projects}/>

//           </div>
//       );
//     }
//   }
// }

// export default App;
//EAECEF
//636179
