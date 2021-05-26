import React from 'react';
import Main from '../Main/Main';

const Home = () => {
    const home={
        id:1,
        title:"Grow Your Business With",
        des:"We are team of talented developer making websites!",
        img:'home.jpg'
}
    return (
       <div className="text-center">
            <Main 
            text={home}
        />
       </div>
    );
};

export default Home;