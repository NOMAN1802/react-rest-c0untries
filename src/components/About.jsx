import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
const About = () => {
    const navigation = useNavigation()
    // console.log(navigation.state)
    if (navigation.state === 'loading') {
      return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div>
            <h1>This is about</h1>
        </div>
    );
};

export default About;