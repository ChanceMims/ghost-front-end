import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const Profile = props => (
  // <div>
  //   <h3>User: {props.currentUser.username}</h3>
  //   <img src={`http://localhost:3000/${props.currentAvatar}`}  />
  // </div>

  <Card>
    <Image
      size="tiny"
      src={`http://localhost:3000/${props.currentAvatar}`}
      wrapped
      ui={false}
    />
    <Card.Content>
      <Card.Header>{props.currentUser.username}</Card.Header>
      <Card.Meta>
        <span className="date">
          Spooky since {props.currentUser.created_at.split("-")[0]}
        </span>
      </Card.Meta>
    </Card.Content>
  </Card>
);

export default Profile;
