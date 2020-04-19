import React, { useEffect, useState } from "react";
import EncounterDetail from "../components/EncounterDetail";
import Comments from "./Comments";
import { Grid } from "semantic-ui-react";
import Cookies from "universal-cookie";

const Encounter = (props) => {
  const [comments, setComments] = useState([]);
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${props.encounter.id}`)
      .then((resp) => resp.json())
      .then((json) => {
        setImage(json.image);
        fetch(`http://localhost:3000/comments/${props.encounter.id}`)
          .then((resp) => resp.json())
          .then((json) => {
            const myComments = [];
            for (let index = 0; index < json.comments.length; index++) {
              let currentComment = {
                ...json.comments[index],
                ...json.user[index],
              };
              // setComments([
              //   ...comments,
              //   { ...json.comments[index], ...json.user[index] }
              // ]);
              //console.log(json)
              myComments.push(currentComment);
            }
            setComments([...myComments]);
            //console.log(json);
          });
      });
  }, [props.encounter]);

  const handlePost = (content) => {
    if (props.currentUser) {
      const cookies = new Cookies();
      const submitData = {
        content: content,
        post_id: props.encounter.id,
        user_id: props.currentUser.id,
      };
      fetch(`http://localhost:3000/comments`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + cookies.get("userToken"),
          Accepted: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      })
        .then((resp) => resp.json())
        .then((json) => {
          // console.log(json);
          setComments([...comments, { ...json.comment, ...json.user }]);
        });
    } else {
      alert("Please log in to post a comment!");
    }
  };

  // console.log(comments);

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <EncounterDetail encounter={props.encounter} image={image} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Comments
            //comments={comments}
            handlePost={handlePost}
            comments={comments}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Encounter;
