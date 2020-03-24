import React, { useState } from "react";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";

const success = position => {
  console.log(position);
};

const CreatePost = props => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Grid textAlign="center" style={{ height: "50vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="/logo.png" /> Share an encounter
        </Header>
        <Form
          size="large"
          onSubmit={() => props.handlePost({ title, content })}
        >
          <Segment stacked>
            <Form.Input
              placeholder="title"
              onChange={e => setTitle(e.target.value)}
            />
            <Form.TextArea
              onChange={e => setContent(e.target.value)}
              placeholder="description"
            />

            <Button
              color="teal"
              size="large"
              //onClick={() => navigator.geolocation.getCurrentPosition(success)}
            >
              Share!
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

//onClick={() => navigator.geolocation.getCurrentPosition(this.success)}
export default CreatePost;
