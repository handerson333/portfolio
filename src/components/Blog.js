import React, { Component } from "react";
import Nav from "./Nav";
import BlogPost from "./BlogPost";
import blogData from "../blogData";
export default class About extends Component {
  render() {
    return (
      <section id="about">
        <Nav />
        <BlogPost props={blogData.blogPosts[1].Content} />
      </section>
    );
  }
}
