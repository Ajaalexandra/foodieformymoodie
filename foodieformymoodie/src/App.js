import React, { Component } from 'react';
import Emotions from './components/Emotions/emotions.js';
import Recipes from './components/Recipes/recipes.js';
import axios from 'axios';
import logo from './images/logo.png';


import './App.css';


class App extends Component {
  constructor(){
    super();

    axios.get('/api/food').then(request => {
      console.log(request);
    })

    this.state = {
      search: "",
      emotions: [{emotion: 'BORED', search:'all'},
      {emotion:'DRAINED', search:'healthy'}, {emotion:'DRUNK', search:'pizza'}, {emotion:'HAPPY', search: 'desserts'}, {emotion:'HUNGRY', search: 'meat'}, {emotion:'STRESSED', search:'chocolate'}, {emotion:'HEARTBROKEN', search:'ice cream'}],

      results:[]


    }



    this.handleSearch = this.handleSearch.bind(this);

  }


    handleSearch(text) {
      this.setState({
        search: text,

      })
      // console.log(this.state.search)

    axios.get('http://localhost:3000/api/food?search=' + text).then(res =>{
      console.log(res);
      this.setState({results: res.data.recipes})
      console.log(this.state.results)
    })

    }








  render() {
    return (
      <div className="App">
      <div className="header">
          <img id="logo" src={logo} alt={'Logo'}></img>
      <div className ="nav">
        <a id='Home' href= "#">Home</a>
        <a id='About' href= "#">About</a>
        <a id='Contact' href="#">Contact</a>

      </div>
      </div>


      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active item1">
      <img class="d-block img-fluid" src="./images/egg.jpeg" ></img>
    </div>
    <div class="carousel-item item2" >
      <img class="d-block img-fluid" src="./images/salmon.jpeg" ></img>
    </div>
    <div class="carousel-item item3">
      <img class="d-block img-fluid" src="./images/pasta.jpeg" ></img>
    </div>

    <div class="carousel-item item4">
      <img class="d-block img-fluid" src="./images/pancake.jpeg" ></img>
    </div>

    <div class="carousel-item item5">
      <img class="d-block img-fluid" src="./images/pizza.jpeg" ></img>
    </div>

    <div class="carousel-item item6">
      <img class="d-block img-fluid" src="./images/happiness.jpeg" ></img>
    </div>






  </div>
</div>



    <div className="choose">
      <h1> Choose Your Mood </h1>
    </div>
    <div id="buttons">

      { this.state.emotions.map((val, i, array) => {
        return <Emotions title={val.emotion} handleClick={() => this.handleSearch(val.search)}/>
      })}


    </div>
      <div className="recipeCards">
      <div>
        {this.state.results.length > 0 && this.state.results.map( (recipes,id,arr) =>
          <Recipes
          key={id}
          recipe={recipes}

          />) }
        </div>


      </div>

    </div>

    )
  }



}



export default App;
