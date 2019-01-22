import React, { Component } from 'react';
import {Grid, Row} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormComponent from "./FormComponent.js";
import ResultComponent from "./ResultComponent.js";
const axios = require('axios');

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchResults: []
    }
  }

  handleSubmitInParent = (dataFromForm) => {
    console.log(dataFromForm.filmName)
    axios.get('http://www.omdbapi.com/', {
      params: {
        apikey: "fcc4212d",
        s: dataFromForm.filmName
      }
    })
    .then(response => {
      this.setState({
        searchResults: JSON.stringify(response.data)
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <h1>FilmDB</h1>
        </Row>
        <Row>
          <FormComponent onSubmit={this.handleSubmitInParent} />
        </Row>
        <Row>
          <ResultComponent data={this.state.searchResults} />
        </Row>
      </Grid>
    );
  }
}

export default App;
