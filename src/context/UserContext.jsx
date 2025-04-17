import React, { createContext, useState } from "react";
import food_items from "../components/food";

export const dataContext = createContext();

function UserContext({ children }) {  
    
    let [input, setInput] = useState("");
    let [category, setCategory] = useState(food_items);
    let [showCart, setShowCart] = useState(false);


    let data = {
        input,
        setInput,
        category,
        setCategory,
        showCart,
        setShowCart
    };

    return (
        <dataContext.Provider value={data}>
            {children} 
        </dataContext.Provider>
    );
}

export default UserContext;
