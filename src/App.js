import React, { Component } from "react";
import PortfolioSlide from "./components/Portfolio";
import ExperienceSlide from "./components/Experience";
import WelcomeSlide from "./components/Welcome";
import Helmet from "react-helmet";
import { Navbar, Nav, NavDropdown}  from "react-bootstrap";
import Projects from "./data/projects.json";
import Experience from "./data/experience.json";
import $ from "jquery";

export default class App extends Component {

  constructor (props) {
    super(props);
    // this.hideNav = this.hideNav.bind(this)
    this.hideNav = this.hideNav.bind(this)
    this.hideNavIfShown = this.hideNavIfShown.bind(this)
    this.toggleNav = this.toggleNav.bind(this)
  }

  // hideNav() {
  //   if ($("#basic-navbar-nav").hasClass("show")) {
  //     $(".navbar-toggler")[0].click()
  //   }
  // }

  hideNavIfShown() {
    if ($("#basic-navbar-nav").hasClass("show")) {
      this.hideNav()
      $(".experience-anchor-button").removeClass("disable-click")

    }
  }

  hideNav() {
    $(".navbar-toggler")[0].click()
  }

  toggleNav() {
    // $(".experience-anchor-button").addClass("disable-click")
    if ($("#basic-navbar-nav").hasClass("show")) {
      $(".experience-anchor-button").removeClass("disable-click")
    } 
    else {
      $(".experience-anchor-button").addClass("disable-click")
    }
  }

  render() {
    return (
      <div className="site-contents">
        <Helmet bodyAttributes={{ style: "background-color : #EAECEF" }} />
        {/* <div className="main-navbar"> */}
        <Navbar className="navbar navbar-default " bg="dark" variant="dark" expand="md" fixed="top" sticky="top">
          <div className="mobile-nav d-flex justify-content-between">
          <Navbar.Brand href="#home" >
            <h1 style={{marginTop: "auto"}}>DAVID GOLDING</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  onClick={this.toggleNav}/>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#experience" >Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="body-content" onClick={this.hideNavIfShown}>
        {/* <div style={{ height: "56px", backgroundColor: "#EAECEF" }}></div> */
        //fixed-top navbar-static-top
        }
        {/* <div className="main-contents" > */}
          {/* {position: "fixed",} */}
          {/* onClick={this.hideNav}  */}
        <div style={{opacity: "1"}}>
        <WelcomeSlide />
        <ExperienceSlide data={Experience} />
        <PortfolioSlide projects={Projects} />
        <footer class="page-footer font-small">
          <div class="footer-copyright text-right py-3" style={{paddingRight:"15px"}}>© David Golding 2020</div>
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
