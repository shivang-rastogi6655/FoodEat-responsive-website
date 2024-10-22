import React from "react";

const cardsData = [
  {
    id: 1,
    img: "FoodEat/food2.png",
    foodName: "Pasta Primavera",
    rating: 4.5,
    desc: "A delicious mix of seasonal vegetables tossed with pasta and olive oil.",
    price: 12.99,
  },
  {
    id: 2,
    img: "FoodEat/food3.png",
    foodName: "Tandoori Chicken",
    rating: 4.7,
    desc: "Marinated chicken grilled in a traditional tandoor, infused with spices.",
    price: 14.99,
  },
  {
    id: 3,
    img: "FoodEat/food4.png",
    foodName: "Sushi Rolls",
    rating: 4.9,
    desc: "Fresh sushi rolls filled with seafood and vegetables, served with soy sauce.",
    price: 10.99,
  },
];

const Cards = () => {
  return (
    <div className=" flex flex-wrap justify-center  lg:gap-10 md:gap- xs:gap-6 xs:p-8  ">
      {cardsData.map((data) => (
        <div
          key={data.id}
          // className="p-8 rounded-xl shadow-lg bg-white border-2 border-[orange] transition-transform transform hover:scale-105"

          // indexcss me @layer wala line
          className="card  lg:max-w-96  md:max-w-80 xs:max-w-72"
        >
          {/* Image */}
          <div className="mb-4">
            <img
              src={data.img}
              alt={data.foodName}
              className="w-full h-auto rounded-md"
            />
          </div>

          {/* Description */}
          <div className="">
            <div className="font-bold text-lg">{data.foodName}</div>
            <div className="text-gray-600">{data.desc}</div>
            <div className="flex items-center justify-between mt-4 ">
              <div className="text-yellow-600 font-bold">{data.rating} ★</div>
              <div className="font-bold">${data.price.toFixed(2)}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
