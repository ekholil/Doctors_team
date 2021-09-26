import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import Doctor from '../Doctor/Doctor';
import './Home.css'
const Home = () => {
    const [doctors, setDoctors] = useState([])
    const personIcon = <FontAwesomeIcon icon={faUser} />
    // fetch data
    useEffect(()=> {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    
    const [addedDoctor, setAddedDoctor] = useState([])
    // handle click on button
    const handleClick = doctor => {
        if(addedDoctor.indexOf(doctor) === -1){
            let totalAddedDoctor = [...addedDoctor, doctor]
            setAddedDoctor(totalAddedDoctor)

        }
    }
  
   let totalCost = 0;
   for(let i = 0; i<addedDoctor.length; i++){
       totalCost = totalCost + addedDoctor[i].salary;
   }
    return (
        <div className='container d-flex'>
            <div className='col-md-9 '>
           <div className='row mt-3'>
           {doctors.map(doctor => <Doctor handleClick={handleClick} key={doctor.id} doctor={doctor}></Doctor>)} 
           </div>
           
        </div>
        <div className='col-md-3 mt-4 sidebar'>
            <div className='sidebar-top'>
            <h3>{personIcon}Doctors Added : {addedDoctor.length}</h3>
            <h3>Total Cost : ${totalCost}</h3>
            </div>
            {addedDoctor.map(doctor => <p>{doctor.first_name + ' ' + doctor.last_name}</p>)}
        </div>
        </div>
    );
};

export default Home;