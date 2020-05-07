import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <Row className="education">
          <Col xs={{ span: 12 }} className="header-col">
            <h1>
              <span>Education</span>
            </h1>
          </Col>

          <Col xs={{ span: 10 }} className="main-col">
            {resumeData.education &&
              resumeData.education.map((item, i) => {
                return (
                  <Row key={i} >
                    <Col>
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <ul>
                        {item.Achievements.map((ach, i) => (
                          <li key={i}>&bull; {ach}</li>
                        ))}
                      </ul>
                    </Col>
                  </Row>
                );
              })}
          </Col>
        </Row>
        <Row className="work">
          <Col xs={{ span: 12 }} className="header-col">
            <h1>
              <span>Work</span>
            </h1>
          </Col>
          <Col xs={{ span: 10 }} className="main-col">
            {resumeData.work &&
              resumeData.work.map((item, i) => {
                return (
                  <Row className="item" key={i}>
                    <Col>
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <Row>
                        {item.Achievements.map((ach, i) => (
                          <li key={i}>{ach}</li>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                );
              })}
          </Col>
        </Row>

        <Row className="row skill">
          <Col sm={{ span: 1, offset: 1 }} className="header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </Col>

          <Col>
            {/* <p>{resumeData.skillsDescription}</p> */}

            <Row className="bars">
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map((item, i) => {
                    return (
                      <Col key={i}>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                        ></span>
                        <em>{item.skillname}</em>
                      </Col>

                    );
                  })}
              </ul>
            </Row>
          </Col>
          <Col sm={{ span: 1 }} className="header-col">
            <h1>
              <span>Languages</span>
            </h1>
          </Col>

          <Col>
            {/* <p>{resumeData.skillsDescription}</p> */}

            <Row className="bars">
              <ul className="skills">
                {resumeData.languages &&
                  resumeData.languages.map((item, i) => {
                    return (
                      <Col key={i}>
                        <span
                          className={`bar-expand ${item.language.toLowerCase()}`}
                        ></span>
                        <em>{item.language}</em>
                      </Col>

                    );
                  })}
              </ul>
            </Row>
          </Col>
        </Row>
      </section >
    );
  }
}
