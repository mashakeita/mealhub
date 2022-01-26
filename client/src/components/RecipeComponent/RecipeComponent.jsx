import "./RecipeComponent.scss";
import { Link } from "react-router-dom";

const RecipeComponent = ({ text, ingredients, image, id }) => {
  return (
    <li className="related-videos__item">
      <Link to={`/video-player/${id}`} className="related-videos__link">
        <div className="related-videos__box-image">
          <img className="related-videos__image" src={image} alt={text} />
        </div>
        <div className="related-videos__content">
          <h3 className="related-videos__title-item">{text}</h3>
          <p className="related-videos__channel">{ingredients}</p>
        </div>
      </Link>
    </li>
  );
};
export default RecipeComponent;
