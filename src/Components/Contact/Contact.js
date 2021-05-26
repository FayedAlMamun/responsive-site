import React from 'react';
import './contact.css'
const Contact = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
            <form className=''> 
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label><br/>
                <input type="email" className="form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputnumber">Phone Number</label><br/>
                <input type="number" className="form" id="exampleInputnumber" aria-describedby="emailHelp" placeholder="Enter Phone number" />
            </div>
            <div className="form-group">
                <label for="exampleInputtext">Message</label><br/>
                <textarea className="form" id="exampleInputtext" placeholder="Write your feelings!" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    );
};

export default Contact;