import React from "react";

function RecipeList({ recipes, onRecipeDelete }) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  function Recipe({ recipe }) {
    const handleDelete = () => {
      onRecipeDelete(recipe.id);
    };



    return (
        <tr key={recipe.id}>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img src={recipe.photo} alt={recipe.name} /></td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.preparation}</td>
            <td>
              <button onClick={handleDelete} name="delete">Delete</button>
            </td>
          </tr>
    );
  }




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
            <Recipe key={recipe.id} recipe={recipe} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
