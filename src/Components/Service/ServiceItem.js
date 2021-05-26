import React from 'react';
const ServiceItem = (props) => {
    return (

        <div className="col-md-4 col-sm-12 col-12 ">
            <div class="card mt-5" style={{ width: "18rem" }}>
                <img className="card-img-top" src={`https://source.unsplash.com/100x100/?${props.img.text}`} alt="" />
                <div class="card-body">
                    <h5 class="card-title">{props.img.text}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button class="btn btn-primary">Check Now</button>
                </div>
            </div>
        </div>

    );
};

export default ServiceItem;