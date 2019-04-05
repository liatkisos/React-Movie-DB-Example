import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class AddMovie extends Component {


  //why is "name" "year" etc not in a label or span?
  //how do i do it with a select instead of radio?
  
  render() {
    return (
      <div className="App">
      <div className="container">
      <h1>Movie Database </h1>
      <br/>
      <h5>Add a Movie:</h5>
      <br/>
      Name: <input name="name" onChange={this.handleChng.bind(this)}/> <br /> 
      Year: <input name="year" onChange={this.handleChng.bind(this)}/> <br /> 
      Poster: <input name="img" onChange={this.handleChng.bind(this)}/> <br />
      Category:
      <br/>       
      {this.props.categories.map( (c) => {

        return(
          <div key={c.id}>
          <input type="radio" name="categoryid" value={c.id} onChange={this.handleChng.bind(this)}/> <span>{c.categoryname}</span>
         </div> 
        )
      } )}
    <br/>      
      <button onClick={this.sendData.bind(this)}>Add!</button>

      </div>
      </div>
    );
  }


handleChng(ev) 
{
this.setState({[ev.target.name]:ev.target.value});
}

async sendData(){
 let resp= await fetch('http://localhost:3000/api/movies/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(this.state)
  });

  let jsonData = await resp.json();
  this.props.refresh();
}



}

export default AddMovie;
