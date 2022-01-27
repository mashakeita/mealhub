import { React, Component } from "react";
import "./CreateRecipe.scss";
import RecipeList from "../components/RecipeList/RecipeList";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

class CreateRecipe extends Component {
  state = {
    recipeData: [],
    recipeList: [],
  };

  componentDidMount() {
    axios
      .get(`${API_URL}/recipies`)
      .then((response) => {
        const recipeResults = response.data;
        this.setState({
          recipeList: recipeResults,
        });
      })

      .catch((error) => console.log(`Get request for videoList: ${error}`));
  }

  handleSubmitRecipe = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/recipies/create-recipe`, {
        text: e.target.titleVideo.value,
        ingredients: e.target.descriptionVideo.value,
      })
      .then((response) => {
        const recipeResults = response.data;
        this.setState({
          recipeList: recipeResults,
        });
        e.target.reset();
      })

      .catch((error) => console.log(`${error}`));
  };

  resetHandler = (e) => {
    e.preventDefault();
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="video__container">
        <section className="upload-video">
          <h1 className="upload-video__title">Upload Recipe</h1>
          <form
            className="upload-video__form"
            id="upload-new-video-form"
            onSubmit={this.handleSubmitRecipe}
            method="post"
          >
            <div className="upload-video__form-container">
              <fieldset
                className="upload-video__preview-image"
                form="upload-new-video-form"
                name="video-upload"
              >
                <h3 className="upload-video__title-image">UPLOAD IMAGE</h3>
                <img
                  className="upload-video__image"
                  src="img/placeholder.svg"
                  alt="Preview Upload Video"
                />
              </fieldset>
              <fieldset
                className="upload-video__video-description"
                form="upload-new-video-form"
                name="video-upload-title"
              >
                <label htmlFor="title-video" className="upload-video__label">
                  TITLE
                </label>
                <textarea
                  type="text"
                  className="upload-video__input-title"
                  placeholder="Add a recipe name"
                  id="titleVideo"
                  name="titleVideo"
                />
                <label
                  htmlFor="description-video"
                  className="upload-video__label"
                >
                  INGREDIENTS
                </label>
                <textarea
                  type="text"
                  className="upload-video__input-description"
                  placeholder="Add recipe ingredients"
                  id="descriptionVideo"
                  name="descriptionVideo"
                />
              </fieldset>
            </div>
            <div className="upload-video__button-container">
              <SubmitButton title="SUBMIT" />
              <button
                className="upload-video__button-reset"
                value="reset"
                onClick={this.resetHandler}
              >
                CANCEL
              </button>
            </div>
          </form>

          <div className="app__video-list">
            <RecipeList recipeList={this.state.recipeList} />
          </div>
        </section>
      </div>
    );
  }
}

export default CreateRecipe;
