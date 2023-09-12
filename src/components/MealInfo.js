import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "react-share";

const MealInfo = () => {
  var id = "";
  const [item, setItem] = useState("");
  const { mealID } = useParams();
  if (mealID !== "") {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals[0]);
      });
  }
  const shareUrl = `https://meal-app.pages.dev/mealInfo/${mealID}`;
  return (
    <div className="p-4 flex justify-center bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen">
      {!item ? (
        ""
      ) : (
        <div className="h-full  p-4 md:flex max-w-4xl m-auto bg-white rounded-xl shadow-md overflow-hidden ">
          <div className="md:leading-4 text-center ">
            <div className="w-5 ">
              <Link to="/">
                <MdArrowBackIos className="" size={25} color="blue" />
              </Link>
            </div>

            <div className="w-80 md:pt-4 mx-auto">
              <img className="rounded-xl" src={item.strMealThumb} alt="" />
            </div>
            <div className="px-4 py-4 leading-8 ">
              <h1 className="uppercase tracking-wide text-xl md:text-2xl  text-indigo-500 font-bold">
                {item.strMeal}
              </h1>
              <h2 className="uppercase tracking-wide text-sm md:text-xl text-gray-500 font-semibold">
                {item.strArea}
              </h2>
              <h3 className="md:text-xl">
                Category{" "}
                <span className="uppercase rounded-md px-2 md:text-xl bg-indigo-400 tracking-wide text-sm text-white font-semibold w-20">
                  {item.strCategory}
                </span>
              </h3>
            </div>
          </div>

          <div className="p-4 md:p-2">
            <div className="md:hidden border-b-2 border-gray-300 text-2xl text-center "></div>
            <div className="">
              <h2 className="pt-4  uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Ingredients
              </h2>
              <div className=" leading-8 indent-8">
                <h4>
                  {item.strIngredient1} {item.strMeasure1}
                </h4>
                <h4>
                  {item.strIngredient2} {item.strMeasure2}
                </h4>
                <h4>
                  {item.strIngredient3} {item.strMeasure3}
                </h4>
                <h4>
                  {item.strIngredient4} {item.strMeasure4}
                </h4>
                <h4>
                  {item.strIngredient5} {item.strMeasure5}
                </h4>
                <h4>
                  {item.strIngredient6} {item.strMeasure6}
                </h4>
                <h4>
                  {item.strIngredient7} {item.strMeasure7}
                </h4>
                <h4>
                  {item.strIngredient8} {item.strMeasure8}
                </h4>
              </div>
            </div>
            <div className="py-4">
              <div className=" border-b-2 border-gray-300 text-2xl text-center "></div>
              <h2 className="pt-4 uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Instructions
              </h2>
              <h4 className="leading-8 indent-8">{item.strInstructions}</h4>
            </div>
          </div>

          <div>
            <FacebookShareButton
              url={shareUrl}
              quote={"Dummy text!"}
              hashtag="#myfavmeal"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton
              url={shareUrl}
              quote={"Dummy text!"}
              hashtag="#myfavmeal"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LineShareButton
              url={shareUrl}
              quote={"Dummy text!"}
              hashtag="#myfavmeal"
            >
              <LineIcon size={32} round />
            </LineShareButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealInfo;
