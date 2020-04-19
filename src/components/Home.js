import React from "react";
import { Grid } from "semantic-ui-react";
import ShowEncounter from "./ShowEncounter";

const Home = props => (
  <div>
    <h1 style={{ color: "white" }}>
      Welcome to the Paranormal Encounter sharing app! If you love sharing your
      encounters and trying to recreate experiences of others, this is the app
      for you! Click on a recent encounter to start:
    </h1>
    <Grid>
      <Grid.Row columns={3}>
        {props.encounters.map(encounter => (
          <Grid.Column>
            <ShowEncounter key={encounter.id} encounter={encounter} />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  </div>
);

export default Home;
