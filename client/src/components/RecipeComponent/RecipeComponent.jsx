import "./RecipeComponent.scss";
import { Link } from "react-router-dom";
import uniqid from "uniqid";

const RecipeComponent = ({ text, ingredients, image }) => {
  return (
    <li className="related-recipe__item">
      <Link to={`/create-recipe/}`} className="related-recipe__link">
        <div className="related-recipe__box-image">
          <img className="related-recipe__image" src={image} alt={text} />
        </div>
        <div className="related-recipe__content">
          <h3 className="related-recipe__title-item">{text}</h3>
          {ingredients &&
            ingredients.map((ingredient) => {
              return (
                <p key={uniqid()} className="related-recipe__channel">
                  {ingredient.name}
                </p>
              );
            })}
        </div>
      </Link>
    </li>
  );
};
export default RecipeComponent;
