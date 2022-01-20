import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "../src/styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
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
