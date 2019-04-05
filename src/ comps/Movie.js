import React, { Component } from 'react';


class Movie extends Component {
  render() {
    return (
      <div className="movie">
      <h1>{this.props.m.name}</h1>
      <img src={this.props.m.img} />
      <h5>{this.props.m.year}</h5>
      <h5>{this.props.m.category}</h5>
       <button onClick={this.deleteMov.bind(this)}>x</button>
       <br/>
       <br/>
      </div>
      
    );
  }


async deleteMov()
{
  let resp= await fetch('http://localhost:3000/api/movies/'+this.props.m.id, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });

  let jsonData=await resp.json();
  alert(jsonData.msg);
  this.props.refresh();
}



}

export default Movie;
