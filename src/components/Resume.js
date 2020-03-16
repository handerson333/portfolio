import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <Row className="education">
          <Col className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </Col>

          <Col className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item, i) => {
                return (
                  <Row className="row item" key={i}>
                    <Col className="twelve columns">
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
        <Row className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map((item, i) => {
                return (
                  <Row className="row item" key={i}>
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <ul>
                        {item.Achievements.map((ach, i) => (
                          <li key={i}>&bull; {ach}</li>
                        ))}
                      </ul>
                    </div>
                  </Row>
                );
              })}
          </div>
        </Row>

        <Row className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{resumeData.skillsDescription}</p>

            <div className="bars">
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map((item, i) => {
                    return (
                      <li key={i}>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                        ></span>
                        <em>{item.skillname}</em>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </Row>
      </section>
    );
  }
}
