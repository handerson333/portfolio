import React, { Component } from 'react';
import Nav from './Nav';
import blogData from '../blogData';
export default class About extends Component {
  render() {
    return (
      <section id="about">
        <Nav />
         <div className="row">
            <div className="nine columns main-col">
              <h2>{blogData.blogPosts[1].Date}</h2>
              <div className="row">
                {blogData.blogPosts[1].Text}
              </div>
            </div>
         </div>
      </section>
    );
  }
}