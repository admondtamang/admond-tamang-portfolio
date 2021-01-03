import React from "react";
import "./profile.css";
export default function Profile() {
  return (
    <div className="profile">
      <div className="profile__left">
        <span>Hello I'm</span>
        <h1>Admond Tamang</h1>
        <h2>Front End Developer</h2>
      </div>
      <div className="profile__right">
        <span></span>
        <img
          src="https://miro.medium.com/max/3150/2*4An60Vc-r2PGnYJZp78T7g.jpeg"
          alt="profile image"
        />
      </div>
    </div>
  );
}
