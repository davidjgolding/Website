import React, { Component } from "react";
import Card from "react-bootstrap/Card";

var tag_colours;
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
    <Card className="text-black project-card" style={{ border: "none" }}>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>{project.head} </Card.Title>
          <Card.Text
            style={{
              color: "grey",
              marginLeft: 5,
              padding: 0,
              textAlign: "right",
              whiteSpace: "nowrap",
              fontStyle: "italic",
            }}
          >
            {parseDate(project.date)}
          </Card.Text>
        </div>
        <Card.Text style={{ color: "grey" }}>{project.sub}</Card.Text>
        <Card.Text className="card-content">{project.desc}</Card.Text>
        <div className="tag-container" style={{ padding: 0 }}>
          <div className="d-flex" style={{ padding: "1.25rem" }}>
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

class CustomCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: props.project,
      max_cards: props.max_cards,
      current: 0,
    };
    this.changeSlide = this.changeSlide.bind(this);
  }

  changeSlide(i) {
    this.setState({ current: this.state.current + i });
  }

  static getDerivedStateFromProps(nextProps, state) {
    return {
      projects: state.projects,
      max_cards: nextProps.max_cards,
      current: nextProps.current == null ? state.current : nextProps.current,
    };
  }

  render() {
    const slides = split(this.state.projects, this.state.max_cards);
    if (this.state.current >= slides.length) {
      this.setState({ current: slides.length - 1 });
    }
    return (
      <div className="s-container">
        <a
          className={
            "carousel-control-prev " +
            (this.state.current <= 0 ? "make-hidden" : "make-visible")
          }
          role="button"
          onClick={() => this.changeSlide(-1)}
          href={void 0}
        >
          <span
            aria-hidden="true"
            className="carousel-control-prev-icon"
          ></span>
          <span className="sr-only">Previous</span>
        </a>

        <div className="s-container">
          {slides.map((projects, i) => (
            <Slide
              className={
                "slide-defaults " +
                (i === this.state.current ? "make-visible " : "") +
                (i === this.state.current - 1 ? "prev-slide " : "") +
                (i === this.state.current + 1 ? "next-slide " : "")
              }
              projects={projects}
              key={i}
            />
          ))}
        </div>
        <a
          className={
            "carousel-control-next " +
            (this.state.current >= slides.length - 1
              ? "make-hidden"
              : "make-visible")
          }
          role="button"
          onClick={() => this.changeSlide(1)}
          href={void 0}
        >
          <span
            aria-hidden="true"
            className="carousel-control-next-icon"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

function Slide(state) {
  var contents = state.projects.map((project) => (
    <ProjectCard project={project} key={project.head} />
  ));

  return (
    <div className={state.className}>
      <div className="card-deck">{contents}</div>
    </div>
  );
}

export default class ProjectSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: props.projects,
      max_cards: max_cards,
      count: 0,
    };
    tag_colours = props.tags;
  }

  maxCards() {
    var dim = Math.round(window.innerHeight / 290) * 2;
    if (dim < 2) {
      dim = 2;
    }
    if (dim > 10) {
      dim = 10;
    }
    if (window.innerWidth < 1000) {
      dim = dim / 2;
    }
    return dim;
  }
  updateDimensions() {
    const dim = this.maxCards();
    this.setState({ max_cards: dim });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    return (
      <section id="projects" className="project slide">
        <div className="projects-container">
          <div className="slide-title">Projects</div>
          <div
            className="projects-content"
            style={{ width: "100%", maxWidth: "1200px", overflow: "hidden" }}
          >
            <CustomCarousel
              className="jumbotron vertical-center"
              project={this.state.projects}
              max_cards={this.state.max_cards}
              current={this.state.current}
            />
          </div>
        </div>
      </section>
    );
  }
}
