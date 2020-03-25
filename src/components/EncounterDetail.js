import React from "react";
//import Encounter from "../containers/Encounter";
import { Grid, GridRow } from "semantic-ui-react";

const EncounterDetail = props => (
  <Grid>
    <Grid.Row>
      <Grid.Column>
        <h1>{props.encounter.title}</h1>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={8}>
        <p>{props.encounter.content}</p>
      </Grid.Column>
      <Grid.Column>
        <img src={`http://localhost:3000/${props.image}`} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default EncounterDetail;
