import React, { Component } from "react";
import CreateComment from "../components/CreateComment";
import ShowComments from "../components/ShowComment";
import Cookies from "universal-cookie";
import { Feed } from "semantic-ui-react";

class Comments extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     encounter: this.props.encounter,
  //     comments: [...this.props.comments]
  //   };
  // }

  // componentDidMount() {
  //   fetch(`http://localhost:3000/comments/${this.props.encounter.id}`)
  //     .then(resp => resp.json())
  //     .then(json => {
  //       for (let index = 0; index < json.comments.length; index++) {
  //         this.setState({
  //           comments: [
  //             ...this.state.comments,
  //             { ...json.comments[index], ...json.user[index] }
  //           ]
  //         });
  //       }
  //       console.log(json);
  //     });
  // }

  handlePost = content => {
    if (this.props.currentUser) {
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
        .then(json => {
          // this.setState({
          //   comments: [
          //     ...this.state.comments,
          //     { ...json.comment, ...json.user_info }
          //   ]
          // });
          console.log(json);
        });

      console.log(this.state);
    } else {
      alert("Please log in to post a comment!");
    }
  };

  render() {
    console.log("render: ", this.props.comments);
    return (
      <Feed>
        {this.props.comments.map(comment => {
          console.log("this is a comment", comment);
          return <ShowComments key={comment.id} comment={comment} />;
        })}
        <CreateComment handlePost={this.handlePost} />
      </Feed>
    );
  }
}

export default Comments;
