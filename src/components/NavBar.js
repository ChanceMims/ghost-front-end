import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button, Sidebar, Menu } from "semantic-ui-react";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "#BF02FF",
  textDecoration: "none",
  color: "white"
};

class NavBar extends Component {
  render() {
    return (
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible
        width="thin"
      >
        <Menu.Item as="a">
          <NavLink
            to="/"
            exact
            style={link}
            activeStyle={{
              background: "#44FF00"
            }}
          >
            Home
          </NavLink>
        </Menu.Item>

        <Menu.Item as="a">
          <NavLink
            to="/encounter"
            exact
            style={link}
            activeStyle={{
              background: "#44FF00"
            }}
          >
            Encounter
          </NavLink>
        </Menu.Item>

        <Menu.Item as="a">
          <NavLink
            to={this.props.loggedIn ? "/create-post" : "/profile"}
            exact
            style={link}
            activeStyle={{
              background: "#44FF00"
            }}
          >
            Share a post
          </NavLink>
        </Menu.Item>

        <Menu.Item as="a">
          <NavLink
            to={"/profile"}
            exact
            style={link}
            activeStyle={{
              background: "#44FF00"
            }}
          >
            {this.props.loggedIn ? "Profile" : "Log In"}
          </NavLink>
        </Menu.Item>

        <Menu.Item as="a">
          {this.props.loggedIn && (
            <Button style={link} onClick={() => this.props.handleClick()}>
              Log Out
            </Button>
          )}
        </Menu.Item>
      </Sidebar>
    );
  }
}

export default NavBar;
