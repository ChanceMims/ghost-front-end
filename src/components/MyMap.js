import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
const colorStyles = require("../GoogleMapStyles.json");

const mapStyles = {
  width: "90%",
  height: "100%"
};

export class MyMap extends Component {
  //eventNames = ['click', 'mouseover']

  _mapLoaded(mapProps, map) {
    map.setOptions({
      styles: colorStyles
    });
  }

  mapStyle = [colorStyles];

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleMouseover = encounter => {
    console.log(encounter);
    this.setState({
      selectedEncounter: encounter
    });
  };

  render() {
    console.log(this.props);

    return (
      <Map
        google={this.props.google}
        zoom={16}
        onClick={this.props.handleClick}
        style={mapStyles}
        initialCenter={this.props.coords}
        onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
        //defaultOptions={{ styles: styles }}
      >
        {this.props.encounters.map(encounter => (
          <Marker
            onClick={() =>
              this.props.handleSelectEncounter(encounter, this.props.history)
            }
            key={encounter.id}
            icon={{
              url: "icons/spookyGhostMarker.png",
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
