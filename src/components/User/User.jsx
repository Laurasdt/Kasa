import React from "react";
import './user.scss'

function UserInfo({ name, profilePicture }) {
  return (
    <div className="UserContainer">
      <p className="Name">{name}</p>
      <img className="ProfilePicture" src={profilePicture} alt="photo de profil" />
    </div>
  );
}

export default UserInfo;