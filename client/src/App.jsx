import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "../src/styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" exact />
        {/* <Route path="/menu" exact />
        <Route path="/recipies" exact />
        <Route path="/signup" exact /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
