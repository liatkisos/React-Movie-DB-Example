import React, { Component } from 'react';
import AddMovie from './ comps/AddMovie';
import AllMovies from './ comps/AllMovies';

class App extends Component {

  state={
    allmovies:[],
    allcategories:[]
  }


async componentDidMount()
  {
    //debugger;
    this.refreshData();
     // why is it resp1 here and not resp 
     // why is this in componentdidmount
    let resp1= await fetch('http://localhost:3000/api/categories/')
    let allcategories=await resp1.json();
    this.setState({allcategories:allcategories});

  }
  render() {
    return (
      <div className="App">
       <AddMovie refresh={this.refreshData.bind(this)} categories={this.state.allcategories}/>
       <AllMovies refresh={this.refreshData.bind(this)}  movies={this.state.allmovies} />
      </div>
    );
  }

  async refreshData()
  {
    //debugger;
    let resp= await fetch('http://localhost:3000/api/movies/'); 
    // why do the links have api before movies
    let allmovies= await resp.json();
    this.setState({allmovies:allmovies });

  }
}

export default App;
