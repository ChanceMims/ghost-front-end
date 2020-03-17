import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%"
};

export class MyMap extends Component {

  success = position => {
    console.log(position)
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={16}
        style={mapStyles}
        initialCenter={{
          lat: 30.277397500000003,
          lng: -97.7429255
        }}
        onClick={() => navigator.geolocation.getCurrentPosition(this.success)}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC1mB3g8qG-9BOAr_2INW0XX_pB5pKUy4Y"
})(MyMap);
