import React from "react";
import Cards from "./Components/Cards";
import {
  FaRegClipboard,
  FaHamburger,
  FaAppleAlt,
  FaTruck,
} from "react-icons/fa";
import { MdPhonelink } from "react-icons/md";

import "./MediaQueries/Hero/HeroSection.css";
import "./MediaQueries/Header/Header.css";

const foodList = [
  { id: 6, image: "FoodEat/food6.jpg" },
  { id: 7, image: "FoodEat/food7.jpg" },
  { id: 8, image: "FoodEat/food8.jpg" },
  { id: 9, image: "FoodEat/food9.jpg" },
  { id: 10, image: "FoodEat/food10.jpg" },
  { id: 11, image: "FoodEat/food11.jpg" },
  { id: 12, image: "FoodEat/food12.jpg" },
  { id: 13, image: "FoodEat/food13.jpg" },
  { id: 14, image: "FoodEat/food14.jpg" },
  { id: 15, image: "FoodEat/food15.jpg" },
  { id: 16, image: "FoodEat/food16.jpg" },
  { id: 17, image: "FoodEat/food17.jpg" },
  { id: 18, image: "FoodEat/food18.jpg" },
];
const App = () => {
  return (
    <>
      {/* MAIN */}

      <div className="max-w-screen-2xl ">
        <header className="md:px-10 md:pt-8  xs:p-4   flex items-center  justify-between    ">
          {/* logo */}
          <span>
            <h1 className="md:text-4xl xs:text-2xl font-bold">
              FOOD<span className="text-EAT">EAT</span>
            </h1>
          </span>
          {/* Header CTA */}
          <div className="flex gap-8 items-center justify-center">
            <ul className="hidden md:flex items-center justify-center gap-10 uppercase font-medium  ">
              <li className="border-b-2 border-transparent hover:border-red-300 cursor-pointer">
                Home
              </li>
              <li className="border-b-2 border-transparent hover:border-red-300 cursor-pointer">
                Menu
              </li>
              <li className="border-b-2 border-transparent hover:border-red-300 cursor-pointer">
                About
              </li>
            </ul>

            {/* ProfilePhoto */}
            <span className="">
              <img
                src="FoodEat/profile.png"
                alt="Profile"
                className=" md:h-12 xs:h-10 cursor-pointer"
              />
            </span>
          </div>
        </header>
        {/* HERO */}
        <section className="grid  md:p-20  xs:px-4 xs:py-6 xs:pb-20  sx:grid-cols-1 lg:grid-cols-[1fr_0.8fr] xs:gap-10 justify-items-center items-center  ">
          {/* Hero Text */}
          <div className="lg:text-start  ">
            <h1 className="xl:text-7xl lg:text-6xl md:text-5xl xs:text-4xl  xl:mb-8  md:mb-6 xs:mb-4  font-bold  xs:text-center  md:text-left">
              Delicious Food Is Waiting For{" "}
              <span className="text-[#F97920]">You</span>
            </h1>
            <div className="xl:text-xl lg:text-base xs:text-sm xl:mb-10 md:mb-8  xs:mb-6 font-medium xs:text-center  md:text-left text-[#495057]">
              Satisfy your cravings with our mouth-watering dishes, made fresh
              just for you. Every bite brings you closer to the perfect meal
              experience!
            </div>

            {/* Hero CTA */}
            <div className=" flex gap-8 items-center lg:justify-start md:justify-center  xs:justify-center ">
              <button className="bg-[#F97316] lg:text-xl md:px-6  xs:font-semibold xs:px-5 xs:py-2 text-white md:font-semibold rounded-xl hover:bg-[#f76d12] hover:shadow-lg hover:scale-105 transition duration-200 ease-in-out">
                Food Menu
              </button>

              <button className="bg-[#D1D5DB] lg:text-xl  md:px-6 xs:font-semibold xs:px-5 xs:py-2 md:font-semibold rounded-xl hover:bg-[#c7cfd9] hover:shadow-lg hover:scale-105 transition duration-200 ease-in-out">
                Book Table
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex items-center justify-center">
            <img
              src="FoodEat/food1.png"
              alt="Hero Image"
              className="w-full h-auto lg:w-[80%]    sm:w-[60%] xs:w-[75%]   rounded-full"
            />
          </div>
        </section>

        {/* Cards */}
        <section className="">
          {/* Headings */}
          <div className="text-center ">
            <h1 className="md:text-4xl xs:text-3xl font-bold md:my-8  xs:my-2">
              Top List
            </h1>
            <span className="text-[#495057] md:text-xl xs:text-sm font-semibold">
              Simple ingredients, great taste in every bite.
            </span>
          </div>

          {/* Card Component */}
          <Cards />
        </section>

        {/* Additional Sections */}
        <section className="flex items-center justify-center lg:pt-36 lg:px-4  md:px-12 md:pt-20 xs:flex-wrap  xs:p-12 xs:gap-12 xl:gap-20 ">
          {/* Image */}
          <div className=" ">
            <img
              src="FoodEat/food5.png"
              alt="Delicious food"
              className="w-auto h-full  "
            />
          </div>

          {/* Text */}
          <div className="">
            <h1 className="text-3xl font-bold mb-2">
              Don’t stop at just one —
            </h1>
            <p className="text-lg text-gray-600">
              Explore our delicious menu and discover your new favorite dish
              today!
            </p>
          </div>
        </section>

        {/* ourServices */}
        <section className="px-16 py-12 pb-6     ">
          {/* Heading */}
          <h1 className="lg:text-3xl xs:text-4xl   text-center font-bold lg:mb-6 xs:my-8">
            Our Services
          </h1>

          <div>
            <ul className="text-gray-700  font-semibold  text-xl flex  items-center justify-between lg:flex-row xs:flex-col xs:gap-6">
              <li className="flex items-center justify-center">
                <MdPhonelink className="mr-2" />
                Online Booking
              </li>
              <li className="flex items-center justify-center">
                <FaHamburger className="mr-2" />
                Fast Food
              </li>
              <li className="flex items-center justify-center">
                <FaAppleAlt className="mr-2" />
                Healthy Food
              </li>
              <li className="flex items-center justify-center">
                <FaTruck className="mr-2" />
                Delivery
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
