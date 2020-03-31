import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="/" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <Link to={"/#home"} className="smoothscroll">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/#about"} className="smoothscroll">
                About
              </Link>
            </li>
            <li>
              <Link to={"/#resume"} className="smoothscroll">
                Resume
              </Link>
            </li>
            <li>
              <Link to={"/#portfolio"} className="smoothscroll">
                Works
              </Link>
            </li>
            <li>
              <Link to={"/#testimonials"} className="smoothscroll">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to={"/#contact"} className="smoothscroll">
                Contact
              </Link>
            </li>
            {/* <li>
              <Link to={`/blog`}>Blog</Link>
            </li> */}
            <li>
              <Link to={`/theHike/hike`}>The Hike</Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
