import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Doctor.css'
const Doctor = (props) => {
   
    const {first_name, last_name, age, email, country, salary, image} = props.doctor;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='col-md-4'>
            <div className='single-doctor'>
                <img className='round' src={image} alt="" rounded/>
                <h3 className='fs-3'>Name : {first_name + ' ' + last_name}</h3>
                <p>Email : {email}</p>
                <p>Age : {age}</p>
                <p>Country : {country}</p>
                <p>Salary : ${salary}</p>
                <button onClick={() => props.handleClick(props.doctor)} className='button'>{cartIcon} Add to Team</button>
                <div>
                 
                </div>
            </div>
        </div>
    );
};

export default Doctor;