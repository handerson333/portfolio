import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
export default class About extends Component {
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
          <Col sm="3" className="profile-pic-wrapper">
            <img
              className="profile-pic"
              id="profile-pic"
              src={"images/profilepics/hayden (" + imgNum + ").jpg"}
              alt="hayden profile pic"
            />
          </Col>

          <Col sm="4">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <Row>
              <Col>
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br></br>
                  <span>{resumeData.address}</span>
                  {/* <br></br>
                    <span>{resumeData.website}</span> */}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    );
  }
}
