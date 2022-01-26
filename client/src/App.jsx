import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "../src/pages/Home";
import Footer from "./components/Footer/Footer";
import Recipies from "../src/pages/Recipies";
import "../src/styles/App.scss";
import CreateRecipe from "./pages/CreateRecipe";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/recipies" element={<Recipies />} />
        <Route exact path="/recipes/:recipe_id" element={<Recipies />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
        {/* <Route path="/posts" element={<PostRecipies />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
