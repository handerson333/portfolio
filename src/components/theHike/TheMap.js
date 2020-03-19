import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, Polyline } from 'google-maps-react';
import points from "./oldPCTCoords";



export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poi: [{ lat: 32.5898, lng: -116.4685, interest: "Start" },
      { lat: 36.6941, lng: -118.372, interest: "halfway point" },
      { lat: 40.2132, lng: -121.3546, interest: "halfway point" },
      { lat: 42.0038, lng: -122.91, interest: "California Oregon Border" },
      { lat: 45.6624, lng: -121.8994, interest: "Oregon Washington Border" },
      { lat: 49, lng: -120.7987, interest: "Canada Border" },
      { lat: 49.0635, lng: -120.78514, interest: "End" }]
    }
  }
  displayMarkers = () => {
    return this.state.poi.map((store, index) => {
      return <Marker key={index} id={index} position={{
        lat: store.lat,
        lng: store.lng
      }}
        onClick={() => console.log("You clicked me!")} />
    })
  }

  render() {
    return (

      <Map
        google={this.props.google}
        zoom={5.8}
        style={mapStyles}
        initialCenter={{ lat: 40.2132, lng: -121.3546 }}
      >
        <Polyline
          path={pathCoordinates}
          options={{
            strokeColor: 'red',
            strokeOpacity: 1,
            strokeWeight: 4,
            icons: [{
              icon: "hello",
              offset: '0',
              repeat: '10px'
            }],
          }}
        />
        {this.displayMarkers()}
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyC-Q30UjGg8_-Kcc-1day5VcfrA0IExGA8'
})(MapContainer);

var pathCoordinates = points

// var array = hikePlanData.map(lng);


const mapStyles = {
  width: '100%',
  height: '100%',
};
