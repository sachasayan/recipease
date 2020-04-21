import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import { ENDPOINTS } from '../utils/endpoints';

class Recipe extends Component {
  state = {
    recipe: []
  };

  componentDidMount() {
    axios.get(ENDPOINTS.getRecipeById(this.props.match.params.recipeid))
      .then(response => {
        this.setState({
          ...this.state,
          recipe: response.data.meals
        });
      });
  }

  ingredientsList(recipe) {
    let ingredients = Object
      .keys(recipe)
      .filter(key => key.includes('strIngredient'))
      .filter(key => !!recipe[key])
      .map((key, i) => ({
        key: i,
        ingredient: recipe['strIngredient'+(i+1)],
        measure: recipe['strMeasure'+(i+1)]
      }));

    return (<ul className="list pl0">
      {ingredients.map(i => <li className="mb1" key={i.key}><b>{i.ingredient}</b>, {i.measure}</li> )}
      </ul>);
  }

  renderRecipe() {
    return this.state.recipe.map(recipe =>
      <div key={recipe.idMeal} className="pa3">
        <article className="ma2 bg-white br3 ba b--black-10">
          <div className="br2 br--top mb3 tc pa3 pv5 cover bg-center" style={{'background': `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${recipe.strMealThumb})`}}>
            <h2 className="f3 white">{recipe.strMeal}</h2>
          </div>
          <div className="cf pa3 pa4-ns">
            <div className="fl w-20">
                {this.ingredientsList(recipe)}
            </div>
            <div className="fl w-80 lh-copy">
              <p>
                {recipe.strInstructions}
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  }

  render() {
    return (
      <>
        { this.renderRecipe() }
      </>
    );
  }
}

export default withRouter(Recipe);