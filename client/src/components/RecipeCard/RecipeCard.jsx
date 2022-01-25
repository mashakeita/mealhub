import React, { useState } from "react";
import Axios from "axios";
import CardItem from "../CardItem/CardItem";
import "../RecipeCard/RecipeCard.scss";

const APP_ID = "c3a6418e";
const APP_KEY = "db06a16368ed1b90ac84839bfbd54bdf";

const RecipeCard = () => {
  const [searchQuery, updateSearchQuery] = useState("");
  const [recipeList, updateRecipeList] = useState([]);
  const [timeoutId, updateTimeoutId] = useState();
  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    updateRecipeList(response.data.hits);
  };

  const OnTextChange = (e) => {
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <div className="search__container">
      <div className="search">
        <div className="search__box">
          <div className="search__header">Find Recipes</div>
          <form action="" className="search__form">
            <input
              type="search"
              required
              value={searchQuery}
              onChange={OnTextChange}
            />
            <i className="fas fa-search"></i>
          </form>
        </div>
      </div>
      <div className="list__container">
        {recipeList?.length ? (
          recipeList.map((recipe, index) => (
            <CardItem key={index} recipe={recipe.recipe} />
          ))
        ) : (
          <img src="" />
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
