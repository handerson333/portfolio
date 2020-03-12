import React, { Component } from "react";
import Nav from "../Nav";
import hikePlanData from "../../hikePlanData";
import Table from "react-bootstrap/Table";

export default class Hike extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div>
          <section id="Hike">
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
                    <td className="hike-plan-item">
                      {row["Section End Point"]}
                    </td>
                    <td className="hike-plan-item">
                      {row["Section Hiking Days"] === 0
                        ? ""
                        : row["Section Hiking Days"].toFixed(1)}
                    </td>
                    <td className="hike-plan-item">
                      {row["Section Distance"] === 0
                        ? ""
                        : row["Section Distance"]}
                    </td>
                    <td className="hike-plan-item">
                      {row["Average Distance/day"] === 0
                        ? ""
                        : row["Average Distance/day"].toFixed(1)}
                    </td>
                    <td className="hike-plan-item">
                      {formatDate(row["Arrival Date"])}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </section>
        </div>
      </div>
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
