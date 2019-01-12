import React, { Component } from "react";
import { Grid, Button, Row, Col, Image } from "react-bootstrap";
import "./Projects.css";
class Projects extends Component {
  state = {};
  render() {
    return (
      <Grid>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} md={4}>
            <div style={{ marginBottom: 50 }}>
              <Image
                width={300}
                height={300}
                src="/assets/photo2.jpeg"
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
                Button
              </Button>
            </div>
          </Col>
          <Col xs={12} sm={4} md={4}>
            <div style={{ marginBottom: 50 }}>
              <Image
                width={300}
                height={300}
                src="/assets/photo3.jpeg"
                circle
              />
              <h3>Flask Project</h3>
              <p>
                On loading or refreshing this page, you are shown a single
                sentence that is a direct quote from a Bob Ross episode. Enter
                the number of paragraphs of lipsum you want in the first
                textbox, and the number of sentences should be whole
              </p>

              <Button bsStyle="primary" bsSize="large">
                Button
              </Button>
            </div>
          </Col>
          <Col xs={12} sm={4} md={4}>
            <div style={{ marginBottom: 50 }}>
              <Image
                width={300}
                height={300}
                src="/assets/photo1.jpeg"
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
                Button
              </Button>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Projects;
