import React from 'react';
import { IoFastFoodOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

function NavBar() {
    return (
        <div className='w-full h-[60px] flex justify-between items-center px-8'>

            <div className='w-[45px] h-[45px] bg-white flex justify-center items-center rounded-md shadow-md'>
                <IoFastFoodOutline className='w-[30px] h-[30px] text-green-500 ' />
            </div>

            <form className='w-[70%] h-[40px] bg-white flex items-center px-5 gap-5  rounded-md shadow-md '>

                <FaSearch  className='w-[20px] h-[20px] text-green-500'/>
                <input  className='w-[100%] outline-none text-[20px]' type='text' placeholder='Search items.....' />
            </form>

            <div className='w-[45px] h-[45px] bg-white flex justify-center items-center rounded-md shadow-md relative'>
                <span className='absolute top-0 right-0 text-green-500 font-bold'>0</span>
                <IoCartOutline  className='w-[30px] h-[30px] text-green-500' />
            </div>

        </div>
    )
}

export default NavBar
