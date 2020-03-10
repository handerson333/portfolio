import React, { Component } from 'react';
export default class BlogPost extends Component {
  render() {
    return (
      
      <section id="post">
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