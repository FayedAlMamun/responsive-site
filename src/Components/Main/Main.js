import React from 'react';
import { NavLink } from 'react-router-dom';
import './Main.css'
const Main = (props) => {
    const img = require(`../images/${props.text.img}`).default
    return (

        <div className="row p-5 ">
            <div className="col-md-6 col-sm-12 m-auto mt-5 mb-3">
                <h3>{props.text.title}</h3>
                <h3 className="text-warning">Fayed Al Mamun</h3><br />
                <p className="text-muted">{props.text.des}</p>
                <NavLink to='/service'><button className="btn btn-dark text-light">Get Start</button></NavLink>
            </div>
            <div className="col-md-6 col-sm-12 mt-5 mb-3">
                <img src={img} className="img-fluid animation" alt="Home" />
            </div>
        </div>
    );
};

export default Main;