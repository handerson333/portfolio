import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <Row className="section-head">
          <Col>
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="footer-widgets">
            <Row>
              <Col><h4>Email:</h4></Col>
              <Col>
                <h5>{resumeData.email}</h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>LinkedIn:</h4></Col>
              <Col>
                <h5>{resumeData.linkedinId}</h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    );
  }
}
