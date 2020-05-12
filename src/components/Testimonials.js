import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div className="text-container">
          <Row noGutters>
            <Col sm={{ span: 1, offset: 3 }} className="header-col">
              <h1>
                <span>Client Quotes About Me</span>
              </h1>
            </Col>
            <Col sm="6" className="flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {resumeData.testimonials &&
                    resumeData.testimonials.map((item, i) => {
                      return (
                        <li key={i}>
                          <blockquote>
                            <p>{item.description}</p>
                            <footer><cite>{item.name}{(item.title) && ", " + item.title}</cite></footer>
                          </blockquote>
                        </li>
                      );
                    })}
                </ul>
              </div>{" "}
              {/* div.flexslider ends */}
            </Col>{" "}
            {/* div.flex-container ends */}
          </Row>{" "}
          {/* row ends */}
        </div>{" "}
        {/* text-container ends */}
      </section>
    );
  }
}
