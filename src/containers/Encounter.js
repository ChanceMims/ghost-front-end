import React, { useEffect, useState } from "react";
import EncounterDetail from "../components/EncounterDetail";
import Comments from "./Comments";
import { Grid } from "semantic-ui-react";

const Encounter = props => {
  //const [comments, setComments] = useState([]);
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${props.encounter.id}`)
      .then(resp => resp.json())
      .then(json => {
        setImage(json.image);
      });

    console.log("update");
  }, [props.encounter]);

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
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Encounter;
