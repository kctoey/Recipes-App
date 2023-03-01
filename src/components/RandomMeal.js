import React, { useEffect } from "react";
import { useContext } from "react";
import { myContext } from "./context/context";
import { BsDice3 } from "react-icons/bs";
const RandomMeal = () => {
  const { randomMeal, fetchrandomMeals } = useContext(myContext);

  useEffect(() => {
    fetchrandomMeals();
  }, []);

  return (
    <div className="h-full w-full bg-gradient-to-r from-sky-500 to-indigo-500 pb-4 px-4">
      <div className="mx-auto text-center pt-4 ">
        <button
          className="bg-white rounded-full p-3 border-4 hover:border-indigo-500 hover:scale-125"
          onClick={() => fetchrandomMeals()}
        >
          <BsDice3 size={30} color="indigo " />
        </button>
      </div>

      {randomMeal.map((meal) => {
        return (
          <div key={meal.id}>
            <div className="m-4 p-4 md:flex max-w-4xl  mx-auto bg-white rounded-xl shadow-md overflow-hidden w-full h-full">
              <div className="md:leading-4 text-center w-84">
                <div className="w-80 md:pt-4 mx-auto">
                  <img className="rounded-xl" src={meal.strMealThumb} alt="" />
                </div>

                <div className="px-4 py-4 leading-8 ">
                  <h1 className="uppercase tracking-wide text-xl md:text-2xl  text-indigo-500 font-bold">
                    {meal.strMeal}
                  </h1>
                  <h2 className="uppercase tracking-wide text-sm md:text-xl text-gray-500 font-semibold">
                    {meal.strArea}
                  </h2>
                  <h3 className="md:text-xl">
                    Category
                    <span className="uppercase rounded-md px-2 md:text-xl bg-indigo-400 tracking-wide text-sm text-white font-semibold w-20">
                      {meal.strCategory}
                    </span>
                  </h3>
                </div>
              </div>

              <div className="p-4 md:p-10">
                <div className="md:hidden border-b-2 border-gray-300 text-2xl text-center "></div>
                <div className="">
                  <h2 className="pt-4  uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Ingredients
                  </h2>
                  <div className=" leading-8 indent-8">
                    <h4>
                      {meal.strIngredient1} {meal.strMeasure1}
                    </h4>
                    <h4>
                      {meal.strIngredient2} {meal.strMeasure2}
                    </h4>
                    <h4>
                      {meal.strIngredient3} {meal.strMeasure3}
                    </h4>
                    <h4>
                      {meal.strIngredient4} {meal.strMeasure4}
                    </h4>
                    <h4>
                      {meal.strIngredient5} {meal.strMeasure5}
                    </h4>
                    <h4>
                      {meal.strIngredient6} {meal.strMeasure6}
                    </h4>
                    <h4>
                      {meal.strIngredient7} {meal.strMeasure7}
                    </h4>
                    <h4>
                      {meal.strIngredient8} {meal.strMeasure8}
                    </h4>
                  </div>
                </div>
                <div className="py-4">
                  <div className=" border-b-2 border-gray-300 text-2xl text-center "></div>
                  <h2 className="pt-4 uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Instructions
                  </h2>
                  <h4 className="leading-8 indent-8">
                    <span>{meal.strInstructions}</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RandomMeal;
