import React, { Component } from "react";
import Nav from "react-bootstrap/Navbar";

export default class MyNav extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav fixed="top" id="nav-wrap" bg="dark" variant="dark" className="justify-content-center" style={{ padding: 0 }}>
          {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="/" title="Hide navigation">
              Hide navigation
            </a> */}
          <ul id="nav">
            <li>
              <a href={"/#home"} className="smoothscroll">
                Home
            </a>
            </li>
            <li>
              <a href={"/#about"} className="smoothscroll">
                About
            </a>
            </li>
            <li>
              <a href={"/#resume"} className="smoothscroll">
                Resume
            </a>
            </li>
            <li>
              <a href={"/#portfolio"} className="smoothscroll">
                Works
            </a>
            </li>
            <li>
              <a href={"/#testimonials"} className="smoothscroll">
                Testimonials
            </a>
            </li>
            <li>
              <a href={"/#contact"} className="smoothscroll">
                Contact
            </a>
            </li>
            {/* <li>
              <a href={`/blog`}>Blog</a>
            </li> */}
            {/* <li>
              <a href={`/theHike/hike`}>The Hike</a>
            </li> */}
          </ul>
        </Nav>
      </React.Fragment>
    );
  }
}
