import React, { Component } from "react";
import { Grid, Col, Row, Image } from "react-bootstrap";
class Profile extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid bsClass="container">
          <Row>
            <Col xs={12} sm={9} style={{ paddingRight: 20 }}>
              <Image
                src="assets/MichaelOnyebuchiOhaya_1.jpg"
                style={{ width: "100%" }}
                responsive
              />
            </Col>

            <Col xsHidden sm={3}>
              side bar
            </Col>
          </Row>
        </Grid>

        <Grid>
          <Col xs={12} sm={9}>
            <Image
              src="assets/MichaelOnyebuchiOhaya_2.jpg"
              style={{ width: "100%" }}
              responsive
            />
          </Col>
          <Col xsHidden sm={3}>
            side bar
          </Col>
        </Grid>
        <Grid>
          <Col xs={12} sm={9}>
            <Image
              src="assets/MichaelOnyebuchiOhaya_3.jpg"
              style={{ width: "100%" }}
              responsive
            />
          </Col>
          <Col xsHidden sm={3}>
            side bar
          </Col>
        </Grid>
      </div>
    );
  }
}

export default Profile;
