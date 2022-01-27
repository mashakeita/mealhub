import { Router } from "express";
import fs from "fs";
import { v4 as uuid } from "uuid";

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
      text: recipe.text,
      ingredients: recipe.ingredients,
      image: recipe.image,
    };
  });
  res.status(200).send(recipeData);
});

// post request for create recipe form
recipeRouter.post("/create-recipe", (req, res) => {
  console.log("req.body", req.body);
  const { text, ingredients } = req.body;
  if (!text || !ingredients) {
    return res
      .status(400)
      .send(
        "Please make sure to include the title and ingredients of the recipe"
      );
  }

  const uploadRecipe = {
    id: uuid(),
    text: text,
    ingredients: [{ quantity: "", name: ingredients }],
    image:
      "https://honestcooking.com/wp-content/uploads/2013/12/Screen-Shot-2013-12-10-at-12.41.37-PM.png",
  };

  const recipeData = readFile();
  recipeData.push(uploadRecipe);
  writeFile(recipeData);

  return res.status(201).json(recipeData);
});

export default recipeRouter;
