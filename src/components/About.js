import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: window.innerWidth > 960,
    };
  }
  render() {
    let resumeData = this.props.resumeData;
    let imgNum = Math.floor(Math.random() * 12) + 1;

    // setInterval(()=>
    //   {
    //       var imgElement = document.getElementById('profile-pic')
    //       imgElement.src = 'images/profilepics/hayden (' + (Math.floor(Math.random()*12) + 1) + ').jpg'
    //   }
    //   , 5000);
    return (
      <section id="about">
        <Row className="about">
          {!isMobile &&
            <Col xs="3" className="profile-pic-wrapper">
              <img
                className="profile-pic"
                id="profile-pic"
                src={"images/profilepics/hayden (" + imgNum + ").jpg"}
                alt="hayden profile pic"
              />
            </Col>
          }
          <Col className="about-text" xs="10">
            <h1>About Me</h1>
            <p>{resumeData.aboutme}</p>

            <Row>
              <Col>
                <h1>Contact Details</h1>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br></br>
                  <span>{resumeData.address}</span>
                  <br></br>
                  <a href="/">{resumeData.website}</a>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    );
  }
}