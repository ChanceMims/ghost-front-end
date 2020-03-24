import React, { Component } from "react";
import CreateComment from "../components/CreateComment";
import ShowComments from "../components/ShowComment";
import Cookies from "universal-cookie";

class Comments extends Component {
  handlePost = content => {
    const cookies = new Cookies();
    const submitData = {
      content: content,
      post_id: this.props.encounter.id,
      user_id: this.props.currentUser.id
    };
    fetch(`http://localhost:3000/comments`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + cookies.get("userToken"),
        Accepted: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(submitData)
    })
      .then(resp => resp.json())
      .then(json => console.log(json));
  };

  render() {
    return (
      <div>
        {this.props.comments.map(comment => (
          <ShowComments key={comment.id} comment={comment} />
        ))}
        <CreateComment handlePost={this.handlePost} />
      </div>
    );
  }
}

export default Comments;
