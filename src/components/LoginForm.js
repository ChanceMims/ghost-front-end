import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
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
        <Header as="h2" color="teal" textAlign="center">
          <Image src="/logo.png" /> Log-in to your account
        </Header>
        <Form
          onSubmit={() => props.handleSubmit({ username, password }, "login")}
          size="large"
        >
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
              onChange={e => setUsername(e.target.value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          <Link to="/create-user">New to us?</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
export default LoginForm;
