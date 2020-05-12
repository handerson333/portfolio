import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
import Blog from "./components/Blog";
import Hike from "./components/theHike/Hike";
import { Container } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          exact={true}
          path="/"
          render={() => (
            <Container fluid className="App">
              <Header resumeData={resumeData} />
              <About resumeData={resumeData} />
              <Resume resumeData={resumeData} />
              <Portfolio resumeData={resumeData} />
              <Testimonials resumeData={resumeData} />
              <Contact resumeData={resumeData} />
              <Footer resumeData={resumeData} />
            </Container>
          )}
        />

        <Route path="/blog" component={Blog} />
        <Route path="/theHike/hike" component={Hike} />
      </Router>
    );
  }
}

export default App;
