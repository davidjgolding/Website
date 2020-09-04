import React, { Component } from "react";
import { Tab, Col, ListGroup, Card } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";
import $ from "jquery";
import ResizeSensor from "css-element-queries/src/ResizeSensor";
class ExperienceBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entity: this.props.entity,
      role: this.props.role,
      location: this.props.location,
      description: this.props.description,
      logo: this.props.logo,
      lastCard: this.props.lastCard,
      buttonActive: false,
    };
    this.expand = this.expand.bind(this);
  }

  expand() {
    const active = this.state.buttonActive;
    this.setState({ buttonActive: !active });
  }

  render() {
    const prefix = "experience-";
    const body = (entity) => prefix + entity.replace(/\s+/g, "") + "-body";
    var className = "text-black experience-card-contents ";
    if (this.lastCard) {
      className += "last-card";
    }
    return (
      <Tab.Pane className="tab-pane" eventKey={prefix + this.state.entity}>
        <Card className={className}>
          <Card.Body className="experience-card-body">
            <div className={"experience-anchor-button"}>
              <AnchorLink
                className={"experience-anchor-button"}
                offset="165"
                href={"#" + body(this.state.entity)}
              >
                <button
                  className={
                    "btn  experience-show-more experience-anchor-button "
                  }
                  type="button"
                  data-toggle="collapse"
                  data-target={"#" + body(this.state.entity)}
                  aria-expanded="false"
                  aria-controls={"#" + body(this.state.entity)}
                  onClick={this.expand}
                >
                  <div className="d-flex flex-row experience-card-header">
                    <div className="company-logo-wrapper">
                      <img
                        className="p-2 company-logo"
                        src={"./" + this.state.logo}
                        alt={this.state.entity + " logo"}
                      />
                    </div>
                    <div className="p-2">
                      <Card.Title>{this.state.role}</Card.Title>
                      <Card.Text>{this.state.location}</Card.Text>
                    </div>
                    <div className="ml-auto experience-show-more-container">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className={
                          this.state.buttonActive
                            ? "experience-show-more-rotate"
                            : "experience-show-more-normal"
                        }
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 
                          10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 
                          0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              </AnchorLink>
            </div>
            <div
              className="experience-card-text collapse "
              id={body(this.state.entity)}
            >
              {this.state.description.map((par, i) => (
                <p
                  style={{ textAlign: "justify" }}
                  key={this.state.entity + "-text-" + i}
                >
                  {par}
                </p>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Tab.Pane>
    );
  }
}

export default class ExperienceSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: this.props.experience,
    };
  }

  componentDidMount() {
    new ResizeSensor($(".tab-content"), function () {
      $(".col-sm-4").height($(".tab-content").height());
    });
  }

  render() {
    const prefix = "experience-";
    const sp = this.state.experience.reduce(
      (acc, item, i) => {
        acc[0].push(
          <ListGroup.Item
            action
            key={prefix + item.entity}
            eventKey={prefix + item.entity}
          >
            <Card
              id={"experience-card-" + i}
              className="text-black experience-card"
              style={{ border: "none" }}
            >
              <Card.Body>
                <Card.Title>{item.entity}</Card.Title>
                <Card.Text>{item.duration}</Card.Text>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        );
        acc[1].push(
          <ExperienceBody
            entity={item.entity}
            role={item.role}
            location={item.location}
            description={item.description}
            logo={item.logo}
            key={item.entity}
            lastCard={i === this.state.experience.length - 1}
          />
        );
        return acc;
      },
      [[], []]
    );
    return (
      <section id="experience" className="experience slide">
        <div className="experience-container">
          <div className="slide-title">Experience</div>
          <div>
            <div className="experience-contents">
              <div className="experience-contents-cards">
                <Tab.Container
                  id="list-group-tabs-example"
                  defaultActiveKey={prefix + this.state.experience[0].entity}
                >
                  <Col sm={4}>
                    <ListGroup>{sp[0]}</ListGroup>
                  </Col>
                  <Col sm={8}>
                    <Tab.Content>{sp[1]}</Tab.Content>
                  </Col>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
