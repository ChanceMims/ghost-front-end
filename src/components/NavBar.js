import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "red",
  textDecoration: "none",
  color: "white"
};

class NavBar extends Component {
  render() {
    return (
      <div>
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: "darkblue"
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/encounter"
          exact
          style={link}
          activeStyle={{
            background: "darkblue"
          }}
        >
          Encounter
        </NavLink>

        <NavLink
          to={"/profile"}
          exact
          style={link}
          activeStyle={{
            background: "darkblue"
          }}
        >
          {this.props.loggedIn ? "Profile" : "Log In"}
        </NavLink>
        {this.props.loggedIn && (
          <Button style={link} onClick={() => this.props.handleClick()}>
            Log Out
          </Button>
        )}
      </div>
    );
  }
}

export default NavBar;
