import { Router } from "express";
import fs from "fs";

const recipeRouter = Router();

// read data from json file
const readFile = () => {
  const recipeData = fs.readFileSync("./data/data.json");
  return JSON.parse(recipeData);
};

const writeFile = (recipeData) => {
  fs.writeFileSync("./data/data.json", JSON.stringify(recipeData, null, 2));
};

const PORT = process.env.PORT || 5050;

// get request for recipeList
recipeRouter.get("/", (_req, res) => {
  let recipeData = readFile();
  recipeData = recipeData.map((recipe) => {
    return {
      id: recipe.id,
      title: recipe.title,
      channel: recipe.channel,
      image: recipe.image,
    };
  });
  res.status(200).send(recipeData);
});

// post request for create recipe form
recipeRouter.post("/", (req, res) => {
  const { text, ingredients } = req.body;
  if (!text || !ingredients) {
    return res
      .status(400)
      .send("Please make sure to include name and ingredients of the recipe");
  }

  const uploadRecipe = {
    id: id,
    text: text,
    ingredients: ingredients,
    instructions: description,
    image: "",
  };

  const recipeData = readFile();
  recipeData.push(uploadRecipe);
  writeFile(recipeData);

  return res.status(201).json(uploadRecipe);
});

export default recipeRouter;
