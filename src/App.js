import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RandomMeal from "./components/RandomMeal";
import "./index.css";
import MealInfo from "./components/MealInfo";
import Homepage from "./components/Homepage";
import Dialog from "./components/Dialog";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/mealInfo/:mealID" element={<MealInfo />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/random" element={<RandomMeal />} />
          <Route path="/category/:catID" element={<Dialog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
