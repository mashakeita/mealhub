import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import "../CardItem/CardItem.scss";

const CardItem = (props) => {
  const [show, setShow] = useState("");

  const { label, image, ingredients, url } = props.recipe;
  return (
    <>
      <div className="recipe__container">
        <Dialog
          onClose={() => console.log("adsadad")}
          aria-labelledby="simple-dialog-title"
          open={!!show}
        >
          <DialogTitle>Ingredients</DialogTitle>
          <DialogContent>
            <p className="card__name">{label}</p>
            <img className="recipe_icon" src={image} alt={label} />
            <table>
              <thead>
                <th>Ingredients</th>
              </thead>
              <tbody>
                {ingredients.map((ingredient, index) => (
                  <tr key={index} className="ingredient-list">
                    <td>{ingredient.text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DialogContent>
          <DialogActions>
            <button className="recipe__newtab" onClick={() => window.open(url)}>
              See More
            </button>
            <button onClick={() => setShow("")}>Close</button>
          </DialogActions>
        </Dialog>
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
    </>
  );
};

export default CardItem;
