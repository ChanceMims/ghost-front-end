import React, { useState } from "react";
//import "../App.css";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Icon,
  Segment,
  Message
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const LoginForm = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Grid textAlign="center" style={{ height: "50vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="electric purple" textAlign="center">
          <Image
            src="/icons/ghost1.png"
            tag="Ghost by Becca O'Shea from the Noun Project"
          />{" "}
          Log-in to your account
        </Header>
        <Form
          onSubmit={() => props.handleSubmit({ username, password }, "login")}
          size="large"
        >
          <Segment stacked>
            <Form.Input
              style={{ color: "#44FF00" }}
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
              onChange={e => setUsername(e.target.value)}
            />
            <Form.Input
              style={{ color: "#44FF00" }}
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />

            <Button color="electric purple" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          <Link style={{ color: "#BF02FF" }} to="/create-user">
            New ghoul? Create account!
          </Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
export default LoginForm;
