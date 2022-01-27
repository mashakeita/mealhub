import express from "express";
import cors from "cors";

import recipeRouter from "./routes/recipies.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5050;

// allow requests from client
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.static("public"));

app.use(express.json());

app.use("/recipies", recipeRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
