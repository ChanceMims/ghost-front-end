import React, { useEffect, useState } from "react";
import EncounterDetail from "../components/EncounterDetail";
import Comments from "./Comments";
import { Grid } from "semantic-ui-react";

const Encounter = props => {
  const [comments, setComments] = useState([]);
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${props.encounter.id}`)
      .then(resp => resp.json())
      .then(json => {
        setImage(json.image);
        fetch(`http://localhost:3000/comments/${props.encounter.id}`)
          .then(resp => resp.json())
          .then(json => {
            const myComments = [];
            for (let index = 0; index < json.comments.length; index++) {
              let currentComment = {
                ...json.comments[index],
                ...json.user[index]
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

  console.log(comments);

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
            currentUser={props.currentUser}
            encounter={props.encounter}
            comments={comments}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Encounter;
