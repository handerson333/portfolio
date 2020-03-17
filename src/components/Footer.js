import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
        <Row>
          <Col>
            <ul className="social-links">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item, i) => {
                  return (
                    <li key={i}>
                      <a href={item.url}>
                        <i className={item.className} />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </Col>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </Row>
      </footer>
    );
  }
}
