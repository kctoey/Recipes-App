import React from "react";
import { useEffect, useContext } from "react";
import { myContext } from "./context/context";
const Categories = () => {
  const { fetchCategoriesMeals, categories } = useContext(myContext);

  useEffect(() => {
    fetchCategoriesMeals();
  }, []);

  return (
    <div className="font-semibold text-xl text-white p-4 w-full h-full bg-gradient-to-r from-sky-500 to-indigo-500 text-center">
      <div>
        <h2>All categories</h2>
      </div>

      <div className="grid sm:grid-cols-2  lg:grid-cols-3 gap-4 text-center">
        {categories.map((category) => (
          <div className="mx-auto" key={category.idCategory}>
            <img src={category.strCategoryThumb} alt="meal" />

            <button className="">{category.strCategory}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
