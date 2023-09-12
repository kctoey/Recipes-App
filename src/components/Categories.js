import React, { useState } from "react";
import { useEffect, useContext } from "react";
import { myContext } from "./context/context";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Dialog from "./Dialog";
const Categories = () => {
  const { fetchCategoriesMeals, categories } = useContext(myContext);

  useEffect(() => {
    fetchCategoriesMeals();
  }, []);

  return (
    <div className="font-semibold text-xl z-0 text-white p-4 min-w-screen w-full h-full bg-gradient-to-r from-sky-500 to-indigo-500 text-center">
      <div>
        <h2>All categories</h2>
      </div>

      <div className="grid sm:grid-cols-2  lg:grid-cols-3 gap-4 text-center">
        {categories
          ? categories.map((category) => (
              <div
                className="mx-auto bg-white rounded-md shadow-lg text-black  p-4 "
                key={category.idCategory}
              >
                <img src={category.strCategoryThumb} alt="meal" />
                <Link to={`/category/${category.idCategory}`}>
                  {" "}
                  <h1 className="text-indigo-500 hover:text-gray-500">
                    {category.strCategory}
                  </h1>
                </Link>
              </div>
            ))
          : "loading"}
      </div>
    </div>
  );
};

export default Categories;
