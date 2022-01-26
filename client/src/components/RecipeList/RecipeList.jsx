import "./RecipeList.scss";
import RecipeComponent from "../RecipeComponent/RecipeComponent";

const RecipeList = ({ recipeList }) => {
  return (
    <>
      <h2 className="related-videos__title">My Recipies</h2>
      <ul className="related-videos__list">
        {recipeList &&
          recipeList.map((recipe) => {
            return (
              <RecipeComponent
                key={recipe.id}
                id={recipe.id}
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
