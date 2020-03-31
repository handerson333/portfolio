import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <Row noGutters>
          <Col>
            <h1>Check Out Some of the Work I Have Done</h1>
            <div
              id="portfolio-wrapper"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map(item => {
                  return (
                    <Col sm="3" className="portfolio-item" key={item.name}>
                      <div className="item-wrap">
                        <a href={item.url}>
                          <img
                            src={item.imgurl}
                            alt="portfolioItem"
                            className="item-img"
                          />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </Col>
                  );
                })}
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}
