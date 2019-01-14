import React, { Component } from "react";
import ContactCard from "./ContactCard";
import { Row, Col, Grid } from "react-bootstrap";
import Movies from "./Movies.jsx";

//import { Link } from "react-router-dom";
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getresults: []
    };
  }

  handleChange(event) {
    const getValue = event.target.value;
    return getValue;
  }

  componentDidMount(searchTerm) {
    // var url = "#";
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=a67d0ff54b82c33be57851e07b2512a3&query=" +
        "marvel"
    )
      .then(responds => responds.json())
      .then(data => {
        this.setState({ getresults: data.results });
      })
      .catch(error => console.log("Request failed", error));
  }
  render() {
    const movieComponents = this.state.getresults.map(movies => {
      movies.poster_path =
        "https://image.tmdb.org/t/p/w500/" + movies.poster_path;
      return <Movies key={movies.id} result={movies} />;
    });

    return (
      <div>
        <Grid>
          <Row>
            <Col xs={6} sm={8}>
              <input
                style={{ fontSize: 20, padding: 20, marginTop: 5 }}
                type="text"
                placeholder="Enter Search Term"
                className="form-control"
                onChange={this.handleChange}
              />
              {movieComponents}
            </Col>
            <Col xs={6} sm={4} style={{ padding: 5 }}>
              <ContactCard
                imgLink="/assets/Adorable.jpeg"
                name="Mr. Ohaya Michael"
                phone="+2348066906352"
                email="ohayamic@gmail.com"
              />
              <br />
              <ContactCard
                imgLink="/assets/cat1.jpeg"
                name="Mr. Dangerous Oneil"
                phone="+2348066906352"
                email="Jarn123@gmail.com"
              />
              <br />
              <ContactCard
                imgLink="/assets/cuteCat.jpeg"
                name="Mr. James Badmos"
                phone="+2348066906352"
                email="JoinReact@gmail.com"
              />
              <br />
              <ContactCard
                imgLink="/assets/fierceCat.jpeg"
                name="Mr. Fierce Badmos"
                phone="+234806690635"
                email="ReactWorld@gmail.com"
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Blog;
