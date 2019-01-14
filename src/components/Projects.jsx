import React, { Component } from "react";
import { Grid, Button, Row, Col, Image } from "react-bootstrap";
import "./Projects.css";
class Projects extends Component {
  state = {};
  render() {
    return (
      <Grid>
        <h1 className="text-center " style={{ color: "#10828c", margin: 30 }}>
          Project
        </h1>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} md={4}>
            <div style={{ marginBottom: 50 }}>
              <Image
                width={300}
                height={300}
                src="/assets/ReactBoot.jpeg"
                circle
              />
              <h3>React Project</h3>
              <p>
                On loading or refreshing this page, you are shown a single
                sentence that is a direct quote from a Bob Ross episode. Enter
                the number of paragraphs of lipsum you want in the first
                textbox, and the number of sentences
              </p>
              <Button bsStyle="primary" bsSize="large">
                Enter Project
              </Button>
            </div>
          </Col>
          <Col xs={12} sm={4} md={4}>
            <div style={{ marginBottom: 50 }}>
              <Image width={300} height={300} src="/assets/Flask.png" circle />
              <h3>Flask Project</h3>
              <p>
                On loading or refreshing this page, you are shown a single
                sentence that is a direct quote from a Bob Ross episode. Enter
                the number of paragraphs of lipsum you want in the first
                textbox, and the number of sentences
              </p>

              <Button bsStyle="primary" bsSize="large">
                Enter Project
              </Button>
            </div>
          </Col>
          <Col xs={12} sm={4} md={4}>
            <div style={{ marginBottom: 50 }}>
              <Image
                width={300}
                height={300}
                src="/assets/bootstrap.jpg"
                circle
              />
              <h3>Bootstrap Project</h3>
              <p>
                On loading or refreshing this page, you are shown a single
                sentence that is a direct quote from a Bob Ross episode. Enter
                the number of paragraphs of lipsum you want in the first
                textbox, and the number of sentences
              </p>

              <Button bsStyle="primary" bsSize="large">
                Enter Project
              </Button>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Projects;
