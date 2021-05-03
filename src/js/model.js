export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=c767414c-21e1-43c6-91b0-e6590106fa16`
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`${data.message} (${response.status})`);
    }

    console.log(data.data);
    let { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    console.log(state.recipe);
  } catch (e) {
    alert(e);
  }
};
