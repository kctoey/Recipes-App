import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { myContext } from "./context/context";
import { MdArrowBackIos } from "react-icons/md";
const Dialog = () => {
  const { catID } = useParams();
  const { categories } = useContext(myContext);
  const category = categories.find((c) => c.idCategory === catID);
  if (category) {
    return (
      <div className="   h-full lg:h-screen w-full flex flex-col  justify-center text-center items-center">
        <div class="max-w-sm lg:max-w-full p-4 lg:flex lg:flex-row   rounded-lg overflow-hidden shadow-xl ">
          <img
            className="object-cover"
            src={category.strCategoryThumb}
            alt=""
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{category.strCategory}</div>
            <p class="text-gray-700 text-base lg:w-[800px]">
              {category.strCategoryDescription}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Category not found</div>;
  }
};

export default Dialog;
