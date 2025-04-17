import React, { useContext ,useEffect} from 'react';
import { IoFastFoodOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { dataContext } from '../context/UserContext';
import food_items from './food';
import { useSelector } from 'react-redux';

function NavBar() {

    let { input, setInput,setCategory,showCart,setShowCart} = useContext(dataContext);

    useEffect(() => {
        let newList = food_items.filter(item => item.food_name.toLowerCase().includes(input.toLowerCase()));
        setCategory(newList);
    }, [input]);

    let item = useSelector((state) => state.cart);

    return (
        <div className='w-full h-[60px] flex justify-between items-center px-5 md:px-8'>

            <div className='w-[45px] h-[45px] bg-white flex justify-center items-center rounded-md shadow-md'>
                <IoFastFoodOutline className='w-[30px] h-[30px] text-green-500' />
            </div>

            <form className='w-[45%] h-[40px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]' onSubmit={(e) => e.preventDefault()}>
                <FaSearch className='w-[20px] h-[20px] text-green-500' />
                <input
                    className='w-[100%] outline-none text-[16px] md:text-[20px]'
                    type='text'
                    placeholder='Search items...'
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
            </form>

            <div className='w-[50px] h-[50px] bg-white flex justify-start items-center rounded-md shadow-md relative cursor-pointer'  onClick={() => setShowCart(!showCart)}>
                <span className='absolute top-0 right-0 text-green-500 font-bold'>{item.length}</span>
                <IoCartOutline className='w-[30px] h-[30px] text-green-500' />
            </div>

        </div>
    );
}

export default NavBar;
