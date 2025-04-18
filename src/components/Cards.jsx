import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { AddItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function Cards({ name, image, id, price, type }) {
  let dispacth = useDispatch();

  return (
    <div className="w-[250px] h-[350px] bg-white p-2.5 rounded-lg flex flex-col gap-2 shadow-lg hover:border-2 border-green-200">
      <div className="w-[100%] h-[60%] overflow-hidden object-cover rounded-lg">
        <img
          src={image}
          alt={name}
          className="object-cover cursor-pointer w-full h-full"
        />
      </div>

      <div className="text-2xl font-semibold">{name}</div>

      <div className="w-full flex justify-between items-center">
        <div className="text-xl font-bold text-green-300">RS. {price}/-</div>
        <div
          className={`flex justify-center items-center gap-2 font-bold ${type === "veg" ? "text-green-300" : "text-red-500"
            }`}
        >
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>

      <button
        className="w-full p-3 bg-green-500 text-white rounded-lg cursor-pointer transition-all hover:bg-green-300"
        onClick={() => {
          dispacth(
            AddItem({ id: id, name: name, price: price, image: image, qty: 1 }));
          toast("Item Added To Cart");
        }
        }
      >
        {" "}
        Add To Cart
      </button>
    </div>
  );
}

export default Cards;
