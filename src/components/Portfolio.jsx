import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import CardDeck from "react-bootstrap/CardDeck";
import $ from "jquery";
// import '../css/Portfolio.css';
// import Button from 'react-bootstrap/Button'

// import '../App.css'
// import { render } from '@testing-library/react';

const tag_colours = {
  Java: "#E66F00",
  React: "#00D8FE",
  Python: "#3375AA",
  JavaScript: "#F5DE1B",
  Haskell: "#605187",
  C: "#AABACD",
  Django: "#092E20",
  JavaCC: "#277F00",
};

const max_cards = 8;

function parseDate(date) {
  const parsedDate = new Date(date);
  const month = parsedDate.toLocaleString("default", { month: "long" });
  const year = parsedDate.getFullYear();
  return month + " " + year;
}

function tags(project) {
  return project.skills.map((tag) => {
    const color = tag_colours[tag] ? tag_colours[tag] : "grey";
    const txt = (
      <p className="tag" style={{ color: color, borderColor: color }}>
        {tag}
      </p>
    );
    return <div key={project.head + tag}> {txt} </div>;
  });
}

function ProjectCard(state) {
  const project = state.project;
  return (
    <Card className="text-black" style={{ border: "none" }}>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>{project.head} </Card.Title>
          <Card.Text style={{ color: "grey", margin: 0, padding: 0 }}>
            {parseDate(project.date)}
          </Card.Text>
        </div>
        <Card.Text>{project.sub}</Card.Text>
        <Card.Text className="cardContent">{project.desc}</Card.Text>
        <div className="d-flex" style={{ padding: 0 }}>
          {tags(project)}
          {project.github ? (
            <div className="ml-auto " style={{ margin: 0 }}>
              <Card.Link href={project.github} style={{ padding: "1px 0px" }}>
                <img
                  width="30px"
                  src="GitHub-Mark-64px.png"
                  alt="GitHub Logo"
                />
              </Card.Link>
            </div>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  );
}

function split(arr, size) {
  var res = [];
  var count = 0;
  while (count < arr.length) {
    res.push(arr.slice(count, size + count));
    count += size;
  }
  return res;
}

function ProjectSlide(state) {
  const contents = state.projects.map((project) => (
    <ProjectCard project={project} key={project.head} />
  ));
  return (
    <div className="project-slide">
      <CardDeck>{contents}</CardDeck>
    </div>
  );
}

function ControlledCarousel(state) {
  const contents = split(state.project, state.max_cards).map((projects, i) => (
    <Carousel.Item>
      <ProjectSlide projects={projects} key={i}  />
    </Carousel.Item>
  ));
  return (
    <Carousel
      id="carousel"
      className="carousel-itemz"
      interval={null}
      controls={true}
      wrap={false}
      touch={false}
      defaultActiveIndex={state.slide}
    >
      {contents}
    </Carousel>
  );
}
export default class PortfolioSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: props.projects,
      max_cards: 8,
      count: 0,
      slide: 0,
    };
  }

  updateDimensions() {
    var dim = Math.round(window.innerHeight / 290) * 2;
    console.log("MXC ", dim);
    if (dim < 2) {
      dim = 2;
    }
    if ($("#carousel div.active").index() > this.state.projects.length / dim) {
      this.setState({
        count: this.state.count + 1,
        slide: Math.floor(this.state.projects.length / dim),
      });
    }
    this.setState({ max_cards: dim });
    // $("#carousel").carousel(0)
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    // const contents = this.state.projects.map(project =>
    //                 (<PortfolioTile project={project} />))
    return (
      <div  id="projects" className="portfolio">
        <ControlledCarousel
          className="jumbotron vertical-center"
          key={this.state.count}
          
          project={this.state.projects}
          max_cards={this.state.max_cards}
          slide={this.state.slide}
        />
      </div>
    );
  }
}

// style={{ minHeight: "95vh" }}