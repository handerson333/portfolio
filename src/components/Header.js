import React, { Component } from "react";
import Nav from "./Nav";
import { Row } from "react-bootstrap";
import {
  isMobile
} from "react-device-detect";

export default class Header extends Component {

  render() {
    let resumeData = this.props.resumeData;
    let imgNum = Math.floor(Math.random() * 12) + 1;
    return (
      <React.Fragment>
        <section id="home">
          <Nav />
          {isMobile &&
            <div className="profile-pic-wrapper">
              <Row className="mobile-profile-pic">
                <img
                  className="profile-pic"
                  id="profile-pic"
                  src={"images/profilepics/hayden (" + imgNum + ").jpg"}
                  alt="hayden profile pic"
                />
              </Row>
            </div>
          }
          <Row className="banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I am {resumeData.name}.</h1>
              <h3>
                I am a {resumeData.role}. {resumeData.roleDescription}
              </h3>
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map(item => {
                    return (
                      <li className="social-item" key={item.name}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          <i className={item.className}></i>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </Row>

          <Row className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </Row>
        </section>
      </React.Fragment>
    );
  }
}