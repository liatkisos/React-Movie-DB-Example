import React, { Component } from 'react';
import Movie from './Movie';
import 'bootstrap/dist/css/bootstrap.min.css';

class AllMovies extends Component {



  render() {
    return (
      <div className="container">
       <br/>
       <br/>
       <h1>All Movies</h1>
        {this.props.movies.map(m=> <Movie refresh={this.props.refresh}   key={m.id} m={m} /> )}
      </div>
    );
  }
}

export default AllMovies;
