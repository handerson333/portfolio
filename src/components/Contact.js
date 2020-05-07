import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
export default class Contact extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <Row noGutters className="section-head">
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
                <a href="mailto:handerson333@gmail.com">
                  <h5>{resumeData.email}</h5>
                </a>

              </Col>
            </Row>
            <Row>
              <Col>
                <h4>LinkedIn:</h4></Col>
              <Col>
                <a href={resumeData.socialLinks[0].url} target="_blank" rel="noopener noreferrer">
                  <h5>{resumeData.linkedinId}</h5>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </section >
    );
  }
}
