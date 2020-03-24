import React from "react";
import { Comment } from "semantic-ui-react";

const ShowComment = props => (
  <Comment>
    {/* <Comment.Avatar src="/images/avatar/small/matt.jpg" /> */}
    <Comment.Content>
      {/* <Comment.Author as="a">Matt</Comment.Author> */}
      <Comment.Metadata>
        {/* <div>Likes: {props.comment.likes}</div> */}
      </Comment.Metadata>
      <Comment.Text> {props.comment.content}</Comment.Text>
      <Comment.Actions>
        {/* <Comment.Action>Like</Comment.Action> */}
      </Comment.Actions>
    </Comment.Content>
  </Comment>
);

export default ShowComment;
