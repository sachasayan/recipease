import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

import { ENDPOINTS } from '../utils/endpoints';

const RecipeSummary = ({ recipe, category }) => {
  const {
    idMeal,
    strMeal,
    strMealThumb
  } = recipe;

  return (
    <div className="fl w-50 w-25-m w-20-l pa2">
      <Link to={`/${category.toLowerCase()}/${idMeal}`}>
      <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10" style={{height: '170px'}}>
        <div className="tc">
          <img src={strMealThumb} className="br-100 h3 w3 dib" alt={strMeal} />
          <h3 className="f6">{strMeal}</h3>
        </div>
      </article>
      </Link>
    </div>
  );
};

class Recipes extends Component {
  state = {
    recipes: []
  };

  componentDidMount() {
    axios.get(ENDPOINTS.getRecipesByCategoryId(this.props.match.params.category))
      .then(response => this.setState({
        ...this.state,
        recipes: response.data.meals }));
  }

  render() {
    return (
      <>
        <h2 className="tc pa2 mt4 ttc">{this.props.match.params.category} Recipes</h2>
        { this.state.recipes.map(recipe =>
          <RecipeSummary
            key={recipe.idMeal}
            recipe={recipe}
            category={this.props.match.params.category}
          />)
        }
      </>
    );
  }
}

export default withRouter(Recipes);


