import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    let imgNum = Math.floor(Math.random() * 12) + 1;
    // setInterval(()=>
    //   {
    //       var imgElement = document.getElementById('profile-pic')
    //       imgElement.src = 'images/profilepics/hayden (' + (Math.floor(Math.random()*12) + 1) + ').jpg'
    //   }
    //   , 5000);
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              id="profile-pic"
              src={"images/profilepics/hayden (" + imgNum + ").jpg"}
              alt="hayden profile pic"
            />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br></br>
                  <span>{resumeData.address}</span>
                  {/* <br></br>
                    <span>{resumeData.website}</span> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
