import React from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Visit from '../Visit';
import LoadingSpinner from './LoadingSpinner';

const UserDetails = () => {
    const navigation = useNavigation()
    // console.log(navigation.state)
    if (navigation.state === 'loading') {
      return <LoadingSpinner></LoadingSpinner>
    }
    const user = useLoaderData()
    console.log(user[0]);
    // const [flags,continents,languages,capital,currencies] =user;
    return (

        <div  className='card w-96 bg-base-100 shadow-xl px-6 py-6 mx-auto'>
       
        <img className='w-full h-56 lg:h-64' src={user[0].flags.png} alt="" />
         
         <div className='active text-center mt-4'>
            <p>Name: {user[0].name.common}</p>
            <p>Capital:{user[0].capital}</p>
            <p>Region:{user[0].region}</p>
            <p> <small>Population:{user[0].population}</small></p>
            <p><small>Area: {user[0].area}</small></p>
            
         </div>
         <div className='mx-auto mt-2'>
            <Link to="/visit"><button className='my-8 float-right px-5 py-2 bg-gray-500 text-white text-sm font-bold tracking-wide rounded-full focus:outline-none relative bottom-0'>Visit Now </button></Link>
            </div>
        </div>
        
    );
    
};

export default UserDetails;