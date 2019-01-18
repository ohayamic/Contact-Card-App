import { Grid, Row, Col, Button, Image } from "react-bootstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AboutMe.css";
class AboutMe extends Component {
  state = {};
  render() {
    return (
      <div className="about-me">
        <Grid>
          <h2 className="text-center about-me">About Me</h2>
          <Row>
            <Col xs={12} md={4}>
              <Image width={300} height={300} src="/assets/mike.jpeg" circle />
              <h3 className="mr-5">FullStack Developer</h3>
            </Col>
            <Col xs={12} md={8} className="col-border">
              <h3 className="profile-text">Ohaya Michael</h3>
              <p>
                Hi I'm Michael a Full-Stack Software Engineer. My passion is in
                building Frameworks using Flask, HTML, CSS, JQuery, React,
                React-bootstrap where student (mostly African International in
                Thüringen State) can colaborate and share ideas in other to
                fight problems facing their motherland and the society they are
                in. I also love building website and web app that enhances
                communication between consumers and suppliers
              </p>
              <Link to="/profile">
                <Button bsStyle="primary" bsSize="large">
                  View Resume
                </Button>
              </Link>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;
