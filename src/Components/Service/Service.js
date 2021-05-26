import React from 'react';
import ServiceItem from './ServiceItem';

const Service = () => {
    const img=[
        {
            id:1,
            text:"Web Development"
        },
        {
            id:2,
            text:"Software Development"
        },
        {
            id:3,
            text:"App Development"
        },
        {
            id:4,
            text:"Digital Marketing"
        },
        {
            id:5,
            text:"Android Development"
        },
        {
            id:6,
            text:"Marketing"
        },
       
    ]
    return (
        <>
            <div className="text-center">
                <h3>Our Services</h3>
            </div>
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="row p-5">
                    {
                        img.map((i, k) => {
                            return (
                                <ServiceItem img={i}
                                    key={k}
                                />
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;