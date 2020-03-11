import React, { Component } from 'react';

export default class BlogPost extends Component {
  render() {
    return (
      
      <section id="post">
         <div className="row">
            <div className="nine columns main-col">
              <h2>{this.props.children}</h2>
              <div className="row">
                {this.props.children}
              </div>
            </div>
         </div>
      </section>
    );
  }
}