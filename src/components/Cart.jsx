import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { RemoveItem, increaseItem, decreaseItem } from "../redux/cartSlice";
import { toast } from "react-toastify";

function Cart({ id, name, image, price, qty }) {
    let dispatch = useDispatch();

    return (
        <>
            <div className="w-full h-[120px] p-2 shadow-lg flex justify-between ">
                <div className="w-[60%] h-full flex gap-5">
                    <div className="w-[60%] h-full overflow-hidden rounded-lg">
                        <img src={image} alt="" className="object-cover" />
                    </div>
                    <div className="w-[65%] h-full flex flex-col justify-between">
                        <div className="text-lg font-semibold break-words line-clamp-2">
                            {name}
                        </div>
                        <div
                            className="w-[110px] h-[35px] bg-slate-400 flex rounded-lg overflow-hidden
    shadow-lg font-semibold border-green-400 border-2 text-xl"
                        >
                            <button
                                className="w-[30%] h-full text-green-400 bg-white  flex justify-center items-center
                                 hover:bg-gray-200"
                                onClick={() => {
                                    dispatch(decreaseItem(id));
                                    toast.error("Item Decreased From Cart")

                                }
                                }
                            >
                                -
                            </button>
                            <span className="w-[40%] h-full text-green-400 bg-slate-200 flex justify-center items-center ">
                                {qty}
                            </span>
                            <button
                                className="w-[30%] h-full text-green-400 bg-white  flex justify-center items-center 
                             hover:bg-gray-200"
                                onClick={() => dispatch(increaseItem(id))}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-end gap-6">
                    <span className="text-xl text-green-400 font-semibold">
                        {" "}
                        {price} /-{" "}
                    </span>
                    <RiDeleteBin5Line
                        className="w-[30px] h-[30px] text-red-500 cursor-pointer"
                        onClick={() => {
                            dispatch(RemoveItem(id));
                            toast.error("Item Removed From Cart")
                        }
                        }
                    />
                </div>
            </div>
        </>
    );
}

export default Cart;
