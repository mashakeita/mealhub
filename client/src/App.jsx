import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "../src/pages/Home";
import Hero from "./components/Hero/Hero";
import MealPlans from "../src/pages/MealPlans";
import Recipies from "../src/pages/MealPlans";
import Signup from "../src/pages/Signup";
import "../src/styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Routes>
        {/* <Route path="/" exact element={<Home />} /> */}
        {/* <Route path="/recipies" element={Recipies} />
        <Route path="/mealplans" element={MealPlans} />
        <Route path="/signup" element={Signup} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
