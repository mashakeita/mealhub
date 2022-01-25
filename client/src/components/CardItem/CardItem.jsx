import React, { useState } from "react";
import "../CardItem/CardItem.scss";

const CardItem = (props) => {
  const [show, setShow] = useState("");

  const { label, image, ingredients, url } = props.recipe;
  return (
    <>
      <div className="recipe__container">
        <span
          onClose={() => console.log("close")}
          aria-labelledby="simple-dialog-title"
          open={!!show}
        >
          <h2 className="card__title">Ingredients</h2>
          <div className="card__content">
            <p className="card__name">{label}</p>
            <div className="card__table">
              <div className="card__head">
                <p>Ingredient</p>
                <p>Weight</p>
              </div>
              <div className="card__body">
                {ingredients.map((ingredient, index) => (
                  <div key={index} className="ingredient-list">
                    <p>{ingredient.text}</p>
                    <p>{ingredient.weight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="card__actions">
            <button className="recipe__newtab" onClick={() => window.open(url)}>
              See More
            </button>
            <button onClick={() => setShow("")}>Close</button>
          </div>
        </span>
        {/* <div className="card-container">
        <div className="card-box">
          <div className="card-image"> */}
        <img className="recipe_icon" src={image} alt={label} />
        {/* </div> */}
        {/* <div className="card-content"> */}
        <h2 className="recipe__title">{label}</h2>
        <div className="recipe__text" onClick={() => setShow(!show)}>
          <a href="#">Ingredients</a>
        </div>
        <div className="recipe__moretext" onClick={() => window.open(url)}>
          <a href="#">See Complete Recipe</a>
        </div>
      </div>
      {/* <div className="card">
      <div className="card-container">
        <div className="card-box">
          <div className="card-image">
            <img className="card-icon" src="img/mealprep.jpg" alt="" />
          </div>
          <div className="card-content">
            <h2 className="card-title">Ingredients</h2>
            <div className="card-button">
              <a href="#">Ingredients</a>
            </div>
            <div className="card-button">
              <a href="#">See Complete Recipe</a>
            </div>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card-box">
          <div className="card-image">
            <img className="card-icon" src="img/mealprep.jpg" alt="" />
          </div>
          <div className="card-content">
            <h2 className="card-title">Ingredients</h2>
            <div className="card-button">
              <a href="#">Ingredients</a>
            </div>
            <div className="card-button">
              <a href="#">See Complete Recipe</a>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default CardItem;
