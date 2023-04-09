import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import User from './components/User';
import LoadingSpinner from './components/LoadingSpinner';

const Users = () => {
    const users = useLoaderData()
    // console.log(users);
    const navigation = useNavigation()
    // console.log(navigation.state)
    if (navigation.state === 'loading') {
      return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className='grid grid-cols-3 gap-5 mt-5'>
            {
                users.map((user, index) => <User
                key={index}
                user ={user}
                ></User>)
            }
        </div>
    );
};

export default Users;