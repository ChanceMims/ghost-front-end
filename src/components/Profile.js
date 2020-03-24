import React from "react";

const Profile = props => (
  <div>
    <h3>User: {props.currentUser.username}</h3>
    <img src={`http://localhost:3000/${props.currentAvatar}`} />
  </div>
);

export default Profile;
