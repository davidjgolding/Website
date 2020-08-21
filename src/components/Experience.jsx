import React, { Component } from 'react';
import { Tab, Row, Col, ListGroup } from 'react-bootstrap'

export default class ExperienceSlide extends Component {
    constructor(props) {
          super(props)
          this.state = {}
    }

    render() {
        return (
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
                <Col sm={4}>
                <ListGroup>
                    <ListGroup.Item action href="#link1">
                    Link 1
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                    Link 2
                    </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col sm={8}>
                <Tab.Content>
                    <Tab.Pane eventKey="#link1">
                        adsad
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2">
                        asd
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
        )
    }

}
