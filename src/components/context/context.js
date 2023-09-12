import React, { createContext, useCallback, useState } from "react";
import axios from "axios";
export const myContext = createContext();
export const AppContext = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [randomMeal, setRandomMeal] = useState([]);

  const fetchHomePageMeals = useCallback((seacrhTerm) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${seacrhTerm}`)
      .then((res) => {
        setMeals(res.data.meals);
      }, []);
  });
  const fetchAllMeals = useCallback(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=a
      `
      )
      .then((res) => {
        setMeals(res.data.meals);
      }, []);
  });
  const fetchCategoriesMeals = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        setCategories(res.data.categories);
      }, []);
  });
  const fetchrandomMeals = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => {
        setRandomMeal(res.data.meals);
      }, []);
  });

  return (
    <myContext.Provider
      value={{
        fetchHomePageMeals,
        meals,
        fetchCategoriesMeals,
        categories,
        randomMeal,
        fetchrandomMeals,
        fetchAllMeals,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
