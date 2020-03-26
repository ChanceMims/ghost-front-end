import React, { useState } from "react";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";

const success = position => {
  console.log(position);
};

const CreatePost = props => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  return (
    <Grid textAlign="center" style={{ height: "50vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="electric purple" textAlign="center">
          <Image
            src="/icons/ghost1.png"
            tag="Ghost by Becca O'Shea from the Noun Project"
          />{" "}
          Share an encounter
        </Header>
        <Form
          size="large"
          onSubmit={() => props.handlePost({ title, content, image })}
        >
          <Segment stacked>
            <Form.Input
              placeholder="Title"
              onChange={e => setTitle(e.target.value)}
            />
            <Form.TextArea
              onChange={e => setContent(e.target.value)}
              placeholder="Description"
            />
            <label>Upload your avatar:</label>
            <Form.Input
              type="file"
              name="image"
              onChange={e => setImage(e.target.files[0])}
            />
            <Button
              color="electric purple"
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
