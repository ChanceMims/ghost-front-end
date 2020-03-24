import React, { useEffect, useState } from "react";
import EncounterDetail from "../components/EncounterDetail";
import Comments from "./Comments";
import { Grid } from "semantic-ui-react";

const Encounter = props => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // console.log(props.encounter);
    fetch(`http://localhost:3000/posts/${props.encounter.id}`)
      .then(resp => resp.json())
      .then(json => {
        setComments(json.comments);
        //console.log(json.comments);
      });
  }, [props.encounter, comments]);

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <EncounterDetail encounter={props.encounter} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Comments
            comments={comments}
            currentUser={props.currentUser}
            encounter={props.encounter}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Encounter;
