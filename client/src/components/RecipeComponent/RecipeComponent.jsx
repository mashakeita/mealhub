import "./RecipeComponent.scss";
import { Link } from "react-router-dom";
import uniqid from "uniqid";

const RecipeComponent = ({ text, ingredients, image }) => {
  return (
    <main>
      <ul className="card-list">
        {/* <Link to={`/create-recipe/}`} className="recipe-card__link"> */}
        <li>
          <article>
            <h1>{text}</h1>
            <section>
              <img src={image} alt={text} />
              <div className="content">
                <a className="view-recipe" href="#">
                  Ingredients
                </a>
                <ul className="categories">{/* <li>Ingredients</li> */}</ul>
                {ingredients &&
                  ingredients.map((ingredient) => {
                    return <p key={uniqid()}>{ingredient.name}</p>;
                  })}
              </div>
            </section>
          </article>
        </li>
        {/* </Link> */}
      </ul>
    </main>
  );
};
export default RecipeComponent;
