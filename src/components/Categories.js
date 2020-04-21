import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { ENDPOINTS } from '../utils/endpoints';

const CategoryDetail = ({ category }) => {
  const {
    strCategory,
    strCategoryThumb,
    strCategoryDescription
  } = category;

  return (
    <div className="fl w-50 w-25-m w-20-l pa2">
      <Link to={`/${strCategory.toLowerCase()}`}>
      <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10" style={{height: '300px'}}>
        <div className="tc">
          <img src={strCategoryThumb} className="br-100 h3 w3 dib" alt={strCategory} />
          <h3 className="f4">{strCategory}</h3>
          <hr className="mw3 bb bw1 b--black-10" />
        </div>
        <p className="lh-copy measure center f6 black-70 tc">
          {strCategoryDescription.substring(0, 100)}...
        </p>
      </article>
      </Link>
    </div>
  );
};

class Categories extends Component {
  state = {
    categories: [],
    selectedCategory: null
  };

  componentDidMount() {
  axios.get(ENDPOINTS.getCategories())
    .then(response => this.setState({
      ...this.state,
      categories: response.data.categories }));
  }

  handleCategorySelect(id) {
    console.log('Selected ', id);
  }

  renderCategories() {
    return this.state.categories.map(category =>
      <CategoryDetail
        key={category.idCategory}
        category={category}
      />);
  }
  render() {
    return (
      <>
        <h2 className="tc pa2 mt4">Categories</h2>
        <div className="cf pa2">
            { this.renderCategories() }
        </div>
      </>
    );
  }
}

export default Categories;
