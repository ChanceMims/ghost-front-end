import React, { useState } from "react";
import { Input, Button, Form } from "semantic-ui-react";

const CreateComment = props => {
  const [comment, setComment] = useState("");

  return (
    <Form onSubmit={() => props.handlePost(comment)}>
      <Input
        onChange={e => setComment(e.target.value)}
        placeholder={"add a comment"}
      />
      <Button>Submit!</Button>
    </Form>
  );
};

export default CreateComment;
