import React, { useState } from "react";
import NavBar from "./NavBar";
import Categories from "./Category";
import Card from "./Card";
import food_items from './food';

function Home() {

    let [category, setCategory] = useState(food_items);

    function filterCategoty(selectedCategory) {
        if (selectedCategory === 'All') {
            setCategory(food_items);
        } else {
            let newList = food_items.filter((item) => item.food_category === selectedCategory);
            setCategory(newList);

        }
    }

    return (
        <div className="bg-slate-200 w-full min-h-screen">
            <NavBar />
            <div className="w-[100%] flex flex-wrap justify-center items-center gap-5 p-3">
                {Categories.map((item) => {
                    return (
                        // Assuming Categories has a unique 'id' or another unique field, use that
                        <div
                            className="w-[140px] h-[140px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] 
                            font-semibold text-gray-500 rounded-lg shadow-md hover:bg-green-200 transition-all duration-200"
                            key={item.id}  onClick={ () => filterCategoty(item.name)} // Use item.id or any unique identifier here
                        >
                            {item.icon}
                            {item.name}
                        </div>
                    );
                }) }
            </div>

            <div className="  w-full flex flex-wrap gap-6 px-4 pt-4  pb-8 justify-center items-center " >
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
        </div>
    );
}

export default Home;
