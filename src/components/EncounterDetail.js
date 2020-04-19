import React from "react";
//import Encounter from "../containers/Encounter";
//import { Grid, GridRow } from "semantic-ui-react";
import { Image, Item } from "semantic-ui-react";

const EncounterDetail = props => (
  <Item>
    <Item.Image size="tiny" src={`http://localhost:3000/${props.image}`} />

    <Item.Content>
      <Item.Header>Title: {props.encounter.title}</Item.Header>

      <Item.Description>{props.encounter.content}</Item.Description>
      {/* <Item.Extra>Tags:</Item.Extra> */}
    </Item.Content>
  </Item>
);

export default EncounterDetail;
