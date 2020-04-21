const BASE = `https://www.themealdb.com/api/json/v1/1`;

const ENDPOINTS = {
  getCategories: () => `${ BASE }/categories.php`,
  getRecipesByCategoryId: (categoryId) => `${ BASE }/filter.php?c=${categoryId}`,
  getRecipeById: (recipeId) => `${ BASE }/lookup.php?i=${recipeId}`
}

export { ENDPOINTS };