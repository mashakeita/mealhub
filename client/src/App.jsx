import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "../src/pages/Home";

import Recipies from "../src/pages/Recipies";

import "../src/styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <RecipeCard /> */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/recipies" element={<Recipies />} />
        {/* <Route path="/mealplans" element={MealPlans} />
        <Route path="/signup" element={Signup} />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
