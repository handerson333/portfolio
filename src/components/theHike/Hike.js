import React, { Component } from "react";
import MyNav from "../MyNav";
import hikePlanData from "../../hikePlanData";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
// import { StaticGoogleMap, Marker, Path } from "react-static-google-map";
import MapContainer from "./TheMap";

import { Row, Col } from "react-bootstrap";

export default class Hike extends Component {
  componentDidMount() {
    // initMap()
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <MyNav />
        </Row>
        <Row className="hike-content">
          <Col sm={{ span: 4, offset: 1 }}>
            <MapContainer />
          </Col>
          <Col sm={{ span: 3, offset: 2 }}>
            <Table striped bordered variant="dark">
              <thead>
                <tr>
                  <th>Section</th>
                  <th>Hiking Days</th>
                  <th>Miles</th>
                  <th>Avg Mi/Day</th>
                  <th>ETA</th>
                </tr>
              </thead>

              <tbody>
                {hikePlanData.map((row, i) => (
                  <tr key={i}>
                    <td>{row["Section End Point"]}</td>
                    <td>
                      {row["Section Hiking Days"] === 0
                        ? ""
                        : row["Section Hiking Days"].toFixed(1)}
                    </td>
                    <td>
                      {row["Section Distance"] === 0
                        ? ""
                        : row["Section Distance"]}
                    </td>
                    <td>
                      {row["Average Distance/day"] === 0
                        ? ""
                        : row["Average Distance/day"].toFixed(1)}
                    </td>
                    <td>{formatDate(row["Arrival Date"])}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

function formatDate(data) {
  var dates = data.split("-");
  var date = new Date(
    Date.UTC(dates[0], parseInt(dates[1], 10) - 1, parseInt(dates[2], 10) + 1)
  );
  var options = {
    month: "numeric",
    day: "numeric"
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}
