import React, { Component } from 'react';
import axios from 'axios';

import './recipes.css'



class Recipes extends Component {


render(){

  const {
    image_url,
    title,
    source_url,

  } = this.props.recipe;


  return(

    <div class="recipeCards">
      <div>
      <img class="recipePic" src={ image_url } />
      <h1>{title}</h1>
      </div>
      <a href={source_url}>{source_url}</a>
      <Ingredients recipeId={this.props.recipe.recipe_id}/>
    </div>


  )
}



}


class Ingredients extends Component{

constructor(){
  super();


  this.state = {
    ingredients: []
  }

  //this.getIngredients = this.getIngredients.bind(this);

}


componentWillMount(){
  axios.get('https://food2fork.com/api/get?key=7b17eea20a64a7f67181a94af6d0f4b8&rId=' + this.props.recipeId).then(response => {
    this.setState({ingredients:response.data.recipe.ingredients})
    //console.log(response.data.recipe.ingredients)
  })
}

  // getIngredients(){
  //   const {ingredients} = this.state.ingredients;
  //
  //   ingredients.map( (ingredient,idx) => {
  //     return (
  //       <li key={idx}> ingredient </li>
  //     )
  //   })
  // }


  render(){

    const {recipeId} = this.props.recipeId

    return(
      <div>
        {
          this.state.ingredients.map( val => <li >{val}</li> )
        }
      </div>
    )
  }
}






export default Recipes;
