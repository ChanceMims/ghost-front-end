import React, { Component } from "react";
import { Grid, Form, Button } from "semantic-ui-react";
import { DirectUpload } from "activestorage";

class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      avatar: {}
    };
  }

  handleChange = event => {
    if (event.target.name === "avatar") {
      this.setState({
        [event.target.name]: event.target.files[0]
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };

  uploadFile = (file, data) => {
    const upload = new DirectUpload(
      file,
      "http://localhost:3000/rails/active_storage/direct_uploads"
    );
    //debugger;
    upload.create((error, blob) => {
      console.log(data.user);
      if (error) {
        console.log(error);
      } else {
        fetch(`http://localhost:3000/users/${data.user.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({ avatar: blob.signed_id })
        })
          .then(resp => resp.json())
          .then(json => this.props.updateCurrentUser(json));
      }
    });
  };

  handleSubmit = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    console.log(userData);
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        Accepted: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: userData })
    })
      .then(resp => resp.json())
      .then(json => this.uploadFile(this.state.avatar, json));
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "50vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form onSubmit={() => this.handleSubmit()}>
            <label>Username: </label>
            <Form.Input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.name}
              onChange={this.handleChange}
            />

            <label>PAssword:</label>
            <Form.Input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <label>Upload your avatar:</label>
            <Form.Input
              type="file"
              name="avatar"
              onChange={this.handleChange}
            />
            <Button>Create Account</Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default CreateUser;
