import React from 'react';
import Main from '../Main/Main';

const About = () => {
    const about={
        id:1,
        title:"Welcome to About Page",
        des:"We are team of talented developer making websites!",
        img:'about.jpg'
}
    return (
        <div className='text-center'>
            <Main 
            key={about.id}
            text={about}
            />
            
        </div>
    );
};

export default About;