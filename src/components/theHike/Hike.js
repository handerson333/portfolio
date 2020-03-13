import React, { Component } from "react";
import Nav from "../Nav";
import hikePlanData from "../../hikePlanData";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { StaticGoogleMap, Marker, Path } from "react-static-google-map";
import { Row, Col } from "react-bootstrap";

export default class Hike extends Component {
  render() {
    return (
      <Container fluid>
        <Row fluid>
          <Nav />
        </Row>
        <Row>
          <Col xs="3">test iasdasdfdfasdf</Col>
          {/* <StaticGoogleMap
              size="200x600"
              apiKey="AIzaSyC-Q30UjGg8_-Kcc-1day5VcfrA0IExGA8"
            >
              <Marker.Group label="Here" color="brown">
                <Marker location="42.065235, -122.602922" />
              </Marker.Group>
              <Path
                points={[
                  "32.5898,-116.4685",
                  "36.6941,-118.372",
                  "40.2132,-121.3546",
                  "42.0038,-122.91",
                  "45.6624,-121.8994",
                  "49,-120.7987"
                ]}
              />
            </StaticGoogleMap> */}
          <Col xs="3">
            <Table striped bordered>
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
