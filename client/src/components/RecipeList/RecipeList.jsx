import "./RecipeList.scss";
import RecipeComponent from "../RecipeComponent/RecipeComponent";
import uniqid from "uniqid";

const RecipeList = ({ recipeList }) => {
  return (
    <>
      <h2 className="related-recipe__title">My Recipies</h2>
      <ul className="related-recipe__list">
        {recipeList &&
          recipeList.map((recipe) => {
            console.log(recipe);
            return (
              <RecipeComponent
                key={uniqid()}
                // id={recipe.id}
                image={recipe.image}
                text={recipe.text}
                ingredients={recipe.ingredients}
              />
            );
          })}
      </ul>
    </>
  );
};

export default RecipeList;
