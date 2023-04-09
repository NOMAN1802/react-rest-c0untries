import React, { createContext } from 'react';
import "./index.css";
import Header from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import { goForMeal } from './loaders/goForMeal';

export const FoodContext = createContext([])
const App = () => {
  const foods = useLoaderData();
  // console.log(foods);
  return (
    <div>
      <FoodContext.Provider value={foods}>
      <Header></Header>
      <Outlet/>
      </FoodContext.Provider>
      
    </div>
  );
};

export default App;