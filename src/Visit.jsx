import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FoodContext } from './App';


const Visit = () => {
    // const foods = useLoaderData();
    // console.log(foods);
    const foods = useContext(FoodContext)
    console.log(foods.meals[0]);
   
    return (
        <div>
              <div className='card w-96 bg-base-100 shadow-xl px-6 py-6 mx-auto mt-5'>
              <div>
                <img src={foods.meals[0].strMealThumb}alt="" />
              </div>
              <div className='active text-center mt-5'>
              <p>Category: {foods.meals[0].strCategory}</p>
              <p className='active text-center '><small>Description: {foods.meals[0].strInstructions.slice(0,200)} </small></p>
              </div>

           <button className=' my-8 float-right px-5 py-2 bg-gray-500 text-white text-sm font-bold tracking-wide rounded-full focus:outline-none relative bottom-0'>Visit Now</button>   
           <Link to='/'><button className=' my-8 float-right px-5 py-2 bg-gray-500 text-white text-sm font-bold tracking-wide rounded-full focus:outline-none relative bottom-0'>Misti khan Bari jan</button>   </Link>
        </div>
        </div>
    );
};

export default Visit;