import React from "react";

function RecipeList({ recipes, onRecipeDelete }) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  const handleDelete = (recipeId) => {
    onRecipeDelete(recipeId);
  };

  const Recipe = ({ recipe }) => {
    const {  name, cuisine, photo, ingredients, preparation } = recipe;

    const deleteRecipe = () => {
      handleDelete(name);
    };


    return (
        <tr>
            <td>{name}</td>
            <td>{cuisine}</td>
            <td><img src={photo} alt={name} /></td>
            <td>{ingredients}</td>
            <td>{preparation}</td>
            <td>
              <button name ="delete" onClick={deleteRecipe}>Delete</button>
            </td>
          </tr>
    );
  };

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <Recipe key={recipe.name} recipe={recipe} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
