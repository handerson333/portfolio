import React from "react";
import { Row, Col } from "react-bootstrap";

export function ShowProfilePic() {
  let imgNum = Math.floor(Math.random() * 12) + 1;
  if (window.innerWidth > 960) {
    return (
      <div></div>
    )
  }
  else {
    return (
      <Row className="mobile-profile-pic">
        <img
          className="profile-pic"
          id="profile-pic"
          src={"images/profilepics/hayden (" + imgNum + ").jpg"}
          alt="hayden profile pic"
        />
      </Row>
    )
  }
}