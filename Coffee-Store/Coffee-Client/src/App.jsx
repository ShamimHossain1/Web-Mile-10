import React, { useState } from 'react';
import './App.css';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './Componants/CoffeeCard';
const App = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffee] = useState(loadedCoffees);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-1/2 mx-auto mt-20'>
      {
        coffees.map(coffee => <CoffeeCard coffees={coffees} setCoffee={setCoffee} key={coffee._id} coffee={coffee}></CoffeeCard>)
      }
    </div>
  );
};

export default App;