import React, { Component } from 'react';
import Nav from '../Nav';
import hikePlanData from '../../hikePlanData';

export default class Hike extends Component {
  render() {
    return (
      <div>
        <Nav className="row"/>
        <div>
        <section id="Hike" className="row">
          <table className="twelve columns">
            <tr>
              <th>Section</th>
              <th>Distance</th>
              <th>Section Hiking Days</th>
              <th>Average Distance per Day</th>
              <th>Arrival Date</th>
            </tr>
            
            <tr>
              <td>{hikePlanData[1]["Section Start Point"]} - {hikePlanData[1]["Section End Point"]}</td>
              <td>{hikePlanData[1]["Section Distance"]}</td>
              <td>{hikePlanData[1]["Section Hiking Days"]}</td>
              <td>{hikePlanData[1]["Average Distance/day"]}</td>
              <td>{hikePlanData[1]["Arrival Date"]}</td>
            </tr>
            
          </table>
        </section>
        </div>
        
      </div>
      
    );
  }
}
