import React from "react";
import { Card } from "semantic-ui-react";

const ShowEncounter = props => (
  <Card>
    <Card.Header>{props.encounter.title}</Card.Header>
    <Card.Description>{props.encounter.content}</Card.Description>
  </Card>
);
export default ShowEncounter;
