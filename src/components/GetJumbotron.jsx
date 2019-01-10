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
              <Col xs={12} smOffset={4} />

              <h1>Welcome</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
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
