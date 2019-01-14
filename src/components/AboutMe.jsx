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
                On loading or refreshing this page, you are shown a single
                sentence that is a direct quote from a Bob Ross episode. Enter
                the number of paragraphs of lipsum you want in the first
                textbox, and the number of sentences per paragraph in the
                second. Note that the number of sentences is not guaranteed to
                be exact, as some quotes are multiple sentences in themselves
                and the generator treats them as a single sentence.This is all
              </p>
              <Link to="/profile">
                <Button bsStyle="primary" bsSize="large">
                  Visit Profile
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
