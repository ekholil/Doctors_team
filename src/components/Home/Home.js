import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Home.css'
const Home = () => {
    const [doctors, setDoctors] = useState([])
    
    useEffect(()=> {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    const [addedDoctor, setAddedDoctor] = useState([])
    const handleClick = doctor => {
        if(addedDoctor.indexOf(doctor) === -1){
            let totalAddedDoctor = [...addedDoctor, doctor]
            setAddedDoctor(totalAddedDoctor)

        }
    }
    // const totalCost = addedDoctor.reduce((prev, current) => {
    //     return prev.salary + current.salary;
    // },0)
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
        <div className='col-md-3 mt-3'>
            <h2>Doctors Added : {addedDoctor.length}</h2>
            <h2>Total Cost : {totalCost}</h2>
            {addedDoctor.map(doctor => <p>{doctor.first_name + ' ' + doctor.last_name}</p>)}
        </div>
        </div>
    );
};

export default Home;