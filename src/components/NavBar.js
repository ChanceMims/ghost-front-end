import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Icon, Sidebar, Menu } from "semantic-ui-react";

const link = {
  width: "100px",
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
        <Menu.Item>
          <NavLink
            to="/"
            exact
            style={link}
            activeStyle={{
              color: "#44FF00"
            }}
          >
            Home
          </NavLink>
        </Menu.Item>

        <Menu.Item>
          <NavLink
            to="/encounter"
            exact
            style={link}
            activeStyle={{
              color: "#44FF00"
            }}
          >
            {/* //<Icon name="snapchat ghost" size="small" /> */}
            Encounter
          </NavLink>
        </Menu.Item>

        <Menu.Item>
          <NavLink
            to={this.props.loggedIn ? "/create-post" : "/profile"}
            exact
            style={link}
            activeStyle={{
              color: "#44FF00"
            }}
          >
            Share a post
          </NavLink>
        </Menu.Item>

        <Menu.Item>
          <NavLink
            to={"/profile"}
            exact
            style={link}
            activeStyle={{
              color: "#44FF00"
            }}
          >
            {this.props.loggedIn ? "Profile" : "Log In"}
          </NavLink>
        </Menu.Item>

        <Menu.Item>
          {this.props.loggedIn && (
            <div style={link} onClick={() => this.props.handleClick()}>
              Log Out
            </div>
          )}
        </Menu.Item>
      </Sidebar>
    );
  }
}

export default NavBar;
