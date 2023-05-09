import React, { useState } from "react";

function RecipeCreate() {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [name, setName] = useState("");
  const handleNameChange = (event) => setName(event.target.value);

  const [cuisine, setCuisine] = useState("");
  const handleCuisineChange = (event) => setCuisine(event.target.value);

  const [photo, setPhoto] = useState("");
  const handlePhotoChange = (event) => setPhoto(event.target.value);

  const [ingredients, setIngredients] = useState("");
  const handleIngredientsChange = (event) => setIngredients(event.target.value);

  const [preparation, setPreparation] = useState("");
  const handlePreparationChange = (event) => setPreparation(event.target.value);




  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  id="name" 
                  type="text" 
                  name="name" 
                  onChange={handleNameChange} 
                  value={name} 
                  placeholder="Name"
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input
                  id="cuisine" 
                  type="text" 
                  name="cuisine" 
                  onChange={handleCuisineChange} 
                  value={cuisine} 
                  placeholder="Cuisine"
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  id="photo" 
                  type="text" 
                  name="photo" 
                  onChange={handlePhotoChange} 
                  value={photo} 
                  placeholder="URL"
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                  id="ingredients" 
                  type="text" 
                  name="ingredients" 
                  onChange={handleIngredientsChange} 
                  value={ingredients} 
                  placeholder="Ingredients"
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea
                  id="preparation" 
                  type="text" 
                  name="preparation" 
                  onChange={handlePreparationChange} 
                  value={preparation} 
                  placeholder="Preparation"
                />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
