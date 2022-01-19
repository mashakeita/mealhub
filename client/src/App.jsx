import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/App.scss";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact />
        <Route path="/menu" exact />
        <Route path="/recipies" exact />
        <Route path="/signup" exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
