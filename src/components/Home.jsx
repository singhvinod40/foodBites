import React, { useContext } from "react";
import NavBar from "./NavBar";
import Categories from "./Category";
import Card from "./Cards";
import food_items from "./food";
import { dataContext } from "../context/UserContext";
import { ImCross } from "react-icons/im";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { MdAutoDelete } from "react-icons/md";
import { ClearCart } from "../redux/cartSlice";

function Home() {
    let { input, setInput, category, setCategory, showCart, setShowCart } =
        useContext(dataContext);

    function filterCategoty(selectedCategory) {
        if (selectedCategory === "All") {
            setCategory(food_items);
        } else {
            let newList = food_items.filter(
                (item) => item.food_category === selectedCategory
            );
            setCategory(newList);
        }
    }

    let item = useSelector((state) => state.cart);
    let dispatch = useDispatch();
    let subTotal = item.reduce((acc, curr) => {
        return acc + curr.price * curr.qty;
    }, 0);

    let deliveryfee = (subTotal * 2) / 100;
    let tax = (subTotal * 5) / 100;
    let discount = (subTotal * 10) / 100;
    let total = (subTotal + deliveryfee + tax - discount).toFixed(2);

    return (
        <div className="bg-slate-200 w-full min-h-screen">
            <NavBar />

            {!input ? (
                <div className="w-[100%] flex flex-wrap justify-center items-center gap-5 p-3">
                    {Categories.map((item) => {
                        return (
                            // Assuming Categories has a unique 'id' or another unique field, use that
                            <div
                                className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-4 p-6 justify-start text-[20px] 
                            font-semibold text-gray-500 rounded-lg shadow-md hover:bg-green-200 cursor-pointer transition-all duration-200"
                                key={item.id}
                                onClick={() => filterCategoty(item.name)} // Use item.id or any unique identifier here
                            >
                                {item.icon}
                                {item.name}
                            </div>
                        );
                    })}
                </div>
            ) : null}

            <div className=" w-full flex flex-wrap gap-6 px-4 pt-4  pb-8 justify-center items-center ">
                {category.map((item) => (
                    <Card
                        key={item.id}
                        name={item.food_name}
                        image={item.food_image}
                        id={item.id}
                        price={item.price}
                        type={item.food_type}
                    />
                ))}
            </div>

            <div
                className={` w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-5 
                    flex flex-col items-center rounded-lg transition-transform duration-500 overflow-auto ${showCart ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <header className="w-full h-[40px] bg-green-300 flex justify-between items-center px-2 rounded-lg mb-4">
                    <span className="text-[18px] font-semibold">Order Item</span>
                    <ImCross
                        className="cursor-pointer"
                        onClick={() => setShowCart(!showCart)}
                    />
                </header>
                <div className="w-full flex justify-end mb-2">
                    <button
                        className="p-2 px-4 bg-blue-100 font-semibold rounded-lg cursor-pointer transition-all hover:bg-blue-200"
                        onClick={() => dispatch(ClearCart())}
                    >
                        <span className="flex items-center gap-2">
                            Clear Cart <MdAutoDelete />
                        </span>
                    </button>
                </div>
                <div className="w-full overflow-y-scroll flex flex-col mt-8 gap-8">
                    {item.map((item) => {
                        return (
                            <Cart
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                price={item.price}
                                qty={item.qty}
                            />
                        );
                    })}
                
                <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-6">
                    <div className="w-full flex justify-between items-center">
                        <span className="text-m font-semibold text-gray-400 ">
                            SubTotal
                        </span>
                        <span className="text-m font-semibold text-green-400">
                            Rs.{subTotal} /-
                        </span>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <span className="text-m font-semibold text-gray-400 ">
                            Delivery Fee
                        </span>
                        <span className="text-m font-semibold text-green-400">
                            Rs.{deliveryfee} /-
                        </span>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <span className="text-m font-semibold text-gray-400 ">Taxes</span>
                        <span className="text-m font-semibold text-green-400">
                            Rs. {tax} /-
                        </span>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <span className="text-m font-semibold text-gray-400 ">
                            Discount
                        </span>
                        <span className="text-m font-semibold text-green-400">
                            Rs.{discount} /-
                        </span>
                    </div>
                </div>
                <div className="w-full flex justify-between items-center mt-4 p-4">
                    <span className="text-lg font-semibold text-gray-400 ">Todat </span>
                    <span className="text-lg font-semibold text-green-400">
                        Rs.{total} /-
                    </span>
                </div>
                <button
                    className="w-[70%] p-3 bg-green-500 text-white rounded-lg cursor-pointer transition-all
                        hover:bg-green-300"
                >
                    {" "}
                    Place Order
                </button>
            </div>
            </div>
        </div>
    );
}

export default Home;
