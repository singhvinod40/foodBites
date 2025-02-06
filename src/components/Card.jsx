import React, { useState } from 'react';
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";


function Card( {name,image,id,price,type}) {

    <div className='w-[300px] h-[400px] bg-white p-2.5 rounded-lg flex 
    flex-col gap-2 shadow-lg hover:border-2 border-green-200'>
      
      <div className='w-[100%] h-[60%] overflow-hidden object-cover   rounded-lg'>
        <img src= {image} alt='food' className=' object-cover cursor-pointer'/>
      </div>

      <div className=' text-2xl font-semibold'>
        {name}
      </div>
      <div className ='w-full flex justify-between items-center'>
        <div className='text-xl font-bold text-green-300'> $ {price}/-</div>
        <div className='flex justify-center items-center gap-2 font-bold text-green-300'>  {type=='veg' ? <LuLeafyGreen/> :<GiChickenOven />} <span>{type}</span></div>
      </div>
      <button className='w-full p-3 bg-green-500 text-white rounded-lg cursor-pointer transition-all hover:bg-green-300 '>Add to Cart</button>
    </div>
  )
}

export default Card
