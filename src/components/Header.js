import React, { Component } from "react";
import Nav from "./Nav";
import { Row } from "react-bootstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: window.innerHeight > 960,
    };
  }
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <Nav />
          <div className="profile-pic-wrapper"><ShowProfilePicIfMobile /></div>
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

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}


function ShowProfilePicIfMobile() {
  let imgNum = Math.floor(Math.random() * 12) + 1;
  if (window.innerHeight < 960) {
    return (
      <Row className="mobile-profile-pic">
        <img
          className="profile-pic"
          id="profile-pic"
          src={"images/profilepics/hayden (" + imgNum + ").jpg"}
          alt="hayden profile pic"
        />
      </Row>
    )
  }
  else {
    return ""
  }

}