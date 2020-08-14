import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  isMobile
} from "react-device-detect";

export default class Nav extends Component {
  toggleNav() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  render() {
    return (
      <React.Fragment>
        {isMobile &&


          <div className="topnav">
            <button className="active">&nbsp;&nbsp;&nbsp;</button>
            <div id="myLinks">
              <Link to={"/#home"} onClick={this.toggleNav} className="smoothscroll">
                Home
              </Link>
              <Link to={"/#about"} onClick={this.toggleNav} className="smoothscroll">
                About
              </Link>
              <Link to={"/#resume"} onClick={this.toggleNav} className="smoothscroll">
                Resume
              </Link>
              <Link to={"/#portfolio"} onClick={this.toggleNav} className="smoothscroll">
                Works
              </Link>
              <Link to={"/#testimonials"} onClick={this.toggleNav} className="smoothscroll">
                Testimonials
              </Link>
              <Link to={"/#contact"} onClick={this.toggleNav} className="smoothscroll">
                Contact
              </Link>
              {/* <Link to={`/blog`}>Blog</Link>
              <Link to={`/theHike/hike`}>The Hike</Link> */}
            </div>
            <button className="icon" onClick={this.toggleNav}>
              <i className="fa fa-bars"></i>
            </button>
          </div>
        }
        {!isMobile &&
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
              {/* <li>
              <Link to={`/theHike/hike`}>The Hike</Link>
            </li> */}
            </ul>
          </nav>
        }
      </React.Fragment >
    );
  }
}
