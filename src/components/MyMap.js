import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
const styles = require("../GoogleMapStyles.json");

const mapStyles = {
  width: "85%",
  height: "100%",
  styles
};

export class MyMap extends Component {
  //eventNames = ['click', 'mouseover']

  handleMouseover = encounter => {
    console.log(encounter);
    this.setState({
      selectedEncounter: encounter
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={16}
        onClick={this.props.handleClick}
        style={mapStyles}
        initialCenter={this.props.coords}
        //defaultOptions={{ styles: styles }}
      >
        {this.props.encounters.map(encounter => (
          <Marker
            onClick={() => this.props.handleSelectEncounter(encounter)}
            key={encounter.id}
            icon={{
              url: "icons/ghostMarker.png",
              scaledSize: { width: 30, height: 30 }
            }}
            name={encounter.title}
            onMouseover={() => {}}
            position={{ lat: encounter.lat, lng: encounter.lng }}
          >
            )}
          </Marker>
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MyMap);
