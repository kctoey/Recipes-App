import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseCircleLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import { FaRandom } from "react-icons/fa";
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="bg-white h-[80px]  w-full text-indigo-500 sticky top-0  shadow-lg  ">
      <div className="grid grid-cols-3 gap-0 items-center text-center ">
        <div className=" pl-4 pt-2 md:pt-0 ">
          <h1 className="font-bold  text-2xl flex ">
            Meals <span className="font-bold  text-yellow-500">App</span>
          </h1>
        </div>
        <div className="p-2  ">
          {navbarOpen ? (
            <div className="bg-black/40 backdrop-blur-md h-screen    absolute top-0 left-0 ">
              <div className="md:invisible text-end p-2">
                <button
                  type="button"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <RiCloseCircleLine size={30} color="white" />
                </button>
              </div>
              <ul className="text-white text-2xl md:visible py-2 flex  flex-col justify-center text-center w-full ">
                <Link to="/">
                  <li className="flex   items-center p-4 hover:translate-x-2 duration-100 ">
                    <AiOutlineHome />
                    <h1>Home</h1>
                  </li>
                </Link>
                <Link to="/categories">
                  <li className="flex items-center p-4 hover:translate-x-2 duration-100">
                    <MdOutlineCategory /> Categories
                  </li>
                </Link>
                <Link to="/random">
                  <li className="flex items-center p-4 hover:translate-x-2 duration-100">
                    <FaRandom /> Random
                  </li>
                </Link>
              </ul>
            </div>
          ) : (
            <ul className=" flex flex-cols justify-center invisible md:visible space-x-4 font-bold text-xl">
              <Link to="/">
                <li className="px-4 hover:border-b-sky-500 border-2 hover:text-sky-500 hover:-translate-y-1 duration-150 border-white">
                  Home
                </li>
              </Link>
              <Link to="/categories">
                <li className="px-4 hover:border-b-sky-500 border-2 hover:text-sky-500 hover:-translate-y-1 duration-150 border-white">
                  Categories
                </li>
              </Link>
              <Link to="/random">
                <li className="px-4 hover:border-b-sky-500 border-2 hover:text-sky-500 hover:-translate-y-1 duration-150 border-white">
                  Random
                </li>
              </Link>
            </ul>
          )}
        </div>
        <div className="md:invisible text-end pr-4 pt-4">
          <button type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
            <GiHamburgerMenu size={50} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
