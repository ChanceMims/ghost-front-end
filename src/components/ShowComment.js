import React from "react";
import { Feed, Image } from "semantic-ui-react";

const ShowComment = props => (
  <Feed.Event>
    <Image
      size="mini"
      circular
      src={`http://localhost:3000/${props.comment.avatar_url}`}
    />
    <Feed.Content>
      <Feed.Summary style={{ color: "#44FF00" }}>
        <Feed.User style={{ color: "#44FF00" }}>
          {props.comment.username}:
        </Feed.User>{" "}
        {props.comment.content}
      </Feed.Summary>
    </Feed.Content>
  </Feed.Event>
);

export default ShowComment;
