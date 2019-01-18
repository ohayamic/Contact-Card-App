import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Button, Row, Col } from "react-bootstrap";

import "./GetJumbotron.css";

class GetJumbotron extends Component {
  state = {};
  render() {
    return (
      <div>
        <Jumbotron className="Jumbotron ">
          <Grid>
            <Row className="jumboMargin">
              <Col xs={12} sm={8} smOffset={4} />

              <h1>Welcome</h1>
              <p>
                This website demonstrates the use of React, React-bootstrap, API
                integration, State, Props, Component, CSS and HTML.
              </p>

              <Link to="/about">
                <Button bsStyle="primary" bsSize="large">
                  Learn more
                </Button>
              </Link>
            </Row>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default GetJumbotron;
