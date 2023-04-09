import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const {name,population,region,flags,ccn3,capital} = user;
    // console.log(user);
     const navigate = useNavigate();
     const handleDetails = () =>{
       navigate(`/user/${ccn3}`)
    }
    // console.log(user);
    return (
        <div className='card w-96 bg-base-100 shadow-xl px-6 py-6 mx-auto'>
            <img className='w-full h-56 lg:h-64' src={flags.png} alt="" />
            <div className='active text-center mt-4'>
            <p>Name: {name.common}</p>
            <p>Capital:{capital}</p>
            <p>Region:{region}</p>
            </div>
            <div className='mx-auto mt-2'>
               <button onClick={handleDetails} className=' my-8 float-right px-5 py-2 bg-gray-500 text-white text-sm font-bold tracking-wide rounded-full focus:outline-none relative bottom-0'>Country Details</button>
               {/* <Link to={`/user/${ccn3}`}> Country Details </Link> */}
            </div>
        </div>
    );
};

export default User;