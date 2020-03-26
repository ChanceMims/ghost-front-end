import React from "react";
import { Grid } from "semantic-ui-react";
import ShowEncounter from "./ShowEncounter";

const Home = props => (
  <div>
    <h1>
      Welcome to the Paranormal Encounter sharing app! If you love sharing your
      encounters and trying to recreate experiences of others, this is the app
      for you! Here are some recent encounters to start:
    </h1>
    <Grid>
      <Grid.Column columns={3}>
        {props.encounters.map(encounter => (
          <ShowEncounter encounter={encounter} />
        ))}
      </Grid.Column>
    </Grid>
  </div>
);

export default Home;
