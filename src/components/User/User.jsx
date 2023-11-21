import React from "react";
import './user.scss'

function UserInfo({ name, profilePicture }) {
  const names=name.split(" ");
  return (
    <div className="UserContainer">
      <p className="Name">{names[0]} <br/> {names[1]}</p>
      <img className="ProfilePicture" src={profilePicture} alt="photo de profil" />
    </div>
  );
}

export default UserInfo;