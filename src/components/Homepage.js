import React from "react";
import { useState, useCallback, useContext, useEffect } from "react";
import { myContext } from "./context/context";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import Loading from "./Loading";
import { BsSearch } from "react-icons/bs";
const Homepage = () => {
  // let navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const { fetchHomePageMeals, meals } = useContext(myContext);

  const fetchMealsHandler = useCallback(() => {
    fetchHomePageMeals(searchTerm);
  }, [searchTerm]);

  return (
    <div className="w-full min-h-screen z-0   bg-gradient-to-r from-sky-500 to-indigo-500  ">
      <div className=" mx-auto ">
        <div className="flex justify-center p-5 rounded-xl">
          <div className="flex justify-center p-4 w-full text-center">
            <input
              className=" px-8   text-base bg-white rounded-xl border-2 focus:outline-none"
              type="text"
              placeholder="Plese fill menu"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
              maxLength="20"
            ></input>

            <div className="group hover:border-indigo-500  border-4   transition duration-150 ease-out md:ease-in mx-4  py-1 text-white rounded-full bg-white">
              <button
                className="px-4 group-hover:border-indigo-500 pt-4 sm:pt-0"
                onClick={fetchMealsHandler}
              >
                <BsSearch color="indigo" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-full grid sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 ">
          {meals ? (
            meals.map((meal) => {
              return (
                <div className="h-full" key={meal.idMeal}>
                  <Link to={`/mealInfo/${meal.idMeal}`}>
                    <div
                      className="md:flex max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden 
                   hover:shadow-xl hover:-translate-y-2 transition delay-150 "
                    >
                      <div className="md:shrink-0">
                        <LazyLoad offsetHorizontal={50}>
                          <img
                            className="md:hover:scale-110 transition delay-150 duration-300 ease-in-out h-48 w-full object-cover md:h-full md:w-48"
                            src={meal.strMealThumb}
                            alt=""
                          />
                        </LazyLoad>
                      </div>
                      <div className="p-8">
                        <h4 className="pb-4 uppercase tracking-wide text-sm text-indigo-500 font-semibold ">
                          {meal.strMeal}
                        </h4>

                        <button className="hover:bg-indigo-500 hover:text-white border-indigo-500 border-2 transition duration-150 ease-out md:ease-in px-4 py-1 text-indigo-500 rounded-full bg-white">
                          View
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <h2 className="mx-auto w-screen font-bold text-3xl text-center text-white">
              The meal you are looking for could not be found. Please try again.
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
