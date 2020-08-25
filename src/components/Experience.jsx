import React, { Component } from "react";
import { Tab, Row, Col, ListGroup, Card } from "react-bootstrap";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import $ from "jquery";

class ExperienceBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entity: this.props.entity,
      role: this.props.role,
      location: this.props.location,
      description: this.props.description,
      logo: this.props.logo,
      buttonActive: false,
    };
    this.expand = this.expand.bind(this);
  }

  expand() {
    if ($(".tab-content").height() != $(".list-group").height()) {
        $(".list-group").height($(".tab-content").height())
        }
    const active = this.state.buttonActive;
    console.log(active);
    this.setState({ buttonActive: !active });
  }

  render() {
    const prefix = "experience-";
    const body = (entity) => prefix + entity.replace(/\s+/g, "") + "-body";
    //className="experience-card-body-vertical-align"
    return (
      <Tab.Pane className="tab-pane" eventKey={prefix + this.state.entity}>
        <Card
          className="text-black experience-card-contents"
          style={{ border: "none" }}
        >
          <Card.Body className="experience-card-body">
            <div class={"experience-anchor-button"}> 
            <AnchorLink class={"experience-anchor-button"} offset='165' href={"#" + body(this.state.entity)}>
            <button
                    className={"btn  experience-show-more experience-anchor-button "}
                    type="button"
                    data-toggle="collapse"
                    data-target={"#" + body(this.state.entity)}
                    aria-expanded="false"
                    aria-controls={"#" + body(this.state.entity)}
                    onClick={this.expand}
                  >
              <div class="d-flex flex-row experience-card-header">
                <div className="company-logo-wrapper">
                  <img
                    class="p-2 company-logo"
                    src={"./" + this.state.logo}
                    alt={this.state.entity + "logo"}
                  />
                </div>
                <div class="p-2">
                  <Card.Title>{this.state.role}</Card.Title>
                  <Card.Text>{this.state.location}</Card.Text>
                </div>
                <div className="ml-auto experience-show-more-container">
                 
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-chevron-down"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className={
                        this.state.buttonActive
                          ? "experience-show-more-rotate"
                          : "experience-show-more-normal"
                      }
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  
                </div>
              </div>
              </button>
              </AnchorLink>
            </div>
            <Card.Text
              className="experience-card-text collapse"
              id={body(this.state.entity)}
            >
              {this.state.description.map((par) => (
                <p style={{ textAlign: "justify" }}>{par}</p>
              ))}
            </Card.Text>
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
      data: this.props.data,
    };
  }

  updateDimensions() {
    // console.log("HEIGHT " + $("#list-group-tabs-example").style.height)
    console.log("A: "+$(".list-group").height())
    console.log("B: "+$(".tab-content").height())
    if ($(".tab-content").height() != $(".list-group").height()) {
    $(".list-group").height($(".tab-content").height())
    }
    console.log("A: "+$(".list-group").height())
    console.log("B: "+$(".tab-content").height())
    // } else {
    //     $(".list-group").height($(".col-sm-4").height())
    // }
    // $(".list-group").height($(".tab-content").height())
    
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
    const prefix = "experience-";
    const sp = this.state.data.reduce(
      (acc, item) => {
        acc[0].push(
          <ListGroup.Item action eventKey={prefix + item.entity}>
            <Card
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
          />
        );
        return acc;
      },
      [[], []]
    );
    return (
      <div>
        <div id="experience" className="experience">
          <div className="experience-contents">
            <div className="experience-contents-cards">
              <Tab.Container
                id="list-group-tabs-example"
                defaultActiveKey={prefix + this.state.data[0].entity}
              >
                {/* <Row> */}
                <Col sm={4}>
                  <ListGroup>{sp[0]}</ListGroup>
                </Col>
                <Col sm={8}>
                  <Tab.Content>{sp[1]}</Tab.Content>
                </Col>
                {/* </Row> */}
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
