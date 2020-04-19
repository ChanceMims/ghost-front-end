import React, { Component } from "react";
import CreateComment from "../components/CreateComment";
import ShowComments from "../components/ShowComment";
import { Feed } from "semantic-ui-react";

class Comments extends Component {
  render() {
    // console.log("render: ", this.state.comments);
    return (
      <Feed>
        {this.props.comments.map((comment) => {
          console.log("this is a comment", comment);
          return <ShowComments key={comment.id} comment={comment} />;
        })}
        <CreateComment handlePost={this.props.handlePost} />
      </Feed>
    );
  }
}

export default Comments;
