import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import MyMap from "./components/MyMap";
import Home from "./components/Home";
import { Grid } from "semantic-ui-react";
import Cookies from "universal-cookie";
import CreatePost from "./components/CreatePost";
import Encounter from "./containers/Encounter";
import NavBar from "./components/NavBar";
import CreateUser from "./components/CreateUser";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import { DirectUpload } from "activestorage";
require("dotenv").config();

const BASEURL = "http://localhost:3000";

class App extends Component {
  constructor() {
    super();
    this.state = {
      encounters: [],
      currentUser: "",
      currentAvatar: "",
      coords: {
        lat: 30.277397500000003,
        lng: -97.7429255
      },
      selectedEncounter: ""
    };
  }

  componentDidMount() {
    const cookies = new Cookies();
    if (cookies.get("userToken")) {
      fetch(`${BASEURL}/profile`, {
        headers: {
          Authorization: "Bearer " + cookies.get("userToken")
        }
      })
        .then(resp => resp.json())
        .then(json => {
          console.log(json);
          this.setState({
            currentUser: json.user,
            currentAvatar: json.avatar_url
          });
          //console.log(this.state.currentUser);
        });
    }

    fetch(`${BASEURL}/posts`)
      .then(resp => resp.json())
      .then(json =>
        this.setState({
          encounters: json,
          selectedEncounter: json[0]
        })
      );

    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          coords: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        });
      },
      () => console.log("failure")
    );
    console.log("coord: ", this.state.coords);
  }

  handlePost = data => {
    const cookies = new Cookies();
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      const encounterData = Object.assign({}, data, {
        lat: lat,
        lng: lng,
        user_id: this.state.currentUser.id
      });
      // debugger;
      fetch(`${BASEURL}/posts`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + cookies.get("userToken"),
          Accepted: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(encounterData)
      })
        .then(resp => resp.json())
        .then(json => {
          this.setState({
            encounters: [...this.state.encounters, json]
          });
          console.log(json);
          this.uploadFile(data.image, json);
        });
    });
  };

  handleLogin = (data, route) => {
    const cookies = new Cookies();
    // console.log(data);
    fetch(`${BASEURL}/${route}`, {
      method: "POST",
      headers: {
        Accepted: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: data })
    })
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          currentUser: json.user,
          currentAvatar: json.avatar
        });
        cookies.set("userToken", json.jwt);
        console.log(this.state.currentUser);
      });
  };

  handleSelectEncounter = encounter => {
    this.setState({
      selectedEncounter: encounter
    });
    console.log(this.state.selectedEncounter);
  };

  handleMapClick = (ref, map, ev) => {
    const location = ev.latLng;
    console.log(location.lat());
    const encounter = {
      id: "new",
      name: "sample",
      lat: location.lat(),
      lng: location.lng()
    };
    this.setState({
      encounters: [...this.state.encounters, encounter]
    });
    map.panTo(location);
    return <Route render={<Redirect to={"/create-account"} />} />;
  };

  handleLogout = () => {
    const cookies = new Cookies();
    cookies.remove("userToken");
    this.setState({
      currentUser: ""
    });
  };

  updateCurrentUser = data => {
    this.setState({
      currentUser: data.user,
      currentAvatar: data.avatar_url
    });
    const cookies = new Cookies();
    cookies.set("userToken", data.jwt);
    return <Redirect to="/profile" />;
  };

  uploadFile = (file, data) => {
    // debugger;
    const cookies = new Cookies();
    const upload = new DirectUpload(
      file,
      "http://localhost:3000/rails/active_storage/direct_uploads"
    );
    //debugger;
    upload.create((error, blob) => {
      //console.log(data.user);
      if (error) {
        console.log(error);
      } else {
        fetch(`http://localhost:3000/posts/${data.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + cookies.get("userToken")
          },
          body: JSON.stringify({ image: blob.signed_id })
        })
          .then(resp => resp.json())
          .then(json => {
            console.log(json);
          });
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Grid>
          <Router>
            <Grid.Row style={{ height: "50vh" }}>
              <Grid.Column width={2}>
                <NavBar
                  handleClick={this.handleLogout}
                  loggedIn={!!this.state.currentUser}
                />
              </Grid.Column>
              <Grid.Column width={14}>
                <MyMap
                  handleClick={this.handleMapClick}
                  handleSelectEncounter={this.handleSelectEncounter}
                  encounters={this.state.encounters}
                  coords={this.state.coords}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row style={{ height: "50vh" }}>
              <Grid.Column width={3} />
              <Grid.Column width={12}>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Home
                      {...props}
                      encounters={this.state.encounters.slice(
                        this.state.encounters.length - 9
                      )}
                    />
                  )}
                />
                <Route
                  exact
                  path="/profile"
                  render={props => {
                    return !!this.state.currentUser ? (
                      <Profile
                        {...props}
                        currentUser={this.state.currentUser}
                        currentAvatar={this.state.currentAvatar}
                      />
                    ) : (
                      <LoginForm {...props} handleSubmit={this.handleLogin} />
                    );
                  }}
                />

                <Route
                  exact
                  path="/create-post"
                  render={props => <CreatePost handlePost={this.handlePost} />}
                />
                <Route
                  exact
                  path="/encounter"
                  render={props => (
                    <Encounter
                      {...props}
                      currentUser={this.state.currentUser}
                      encounter={this.state.selectedEncounter}
                    />
                  )}
                />
                <Route
                  exact
                  path="/create-user"
                  render={props => (
                    <CreateUser
                      {...props}
                      updateCurrentUser={this.updateCurrentUser}
                    />
                  )}
                />
              </Grid.Column>
            </Grid.Row>
          </Router>
        </Grid>
      </div>
    );
  }
}

export default App;
