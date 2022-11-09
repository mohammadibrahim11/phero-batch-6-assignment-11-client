import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    console.log(service);
    const {name,img,price,description,_id} = service;
    // const {}
    return (
        <div>
           
            <div className="card" style={{width: '23rem'}}>
  <img src={img}  className="card-img p-2 rounded" alt={name}/>
  <div className="card-body text-start">
    <h5 className="card-title fs-5 text-dark">name:{name}</h5>
    <h5 className="card-title text-secondary">price:{price}</h5>
    <p className="card-text text-secondary">{description.slice(0,100)}...</p>
    <Link to= {`/services/${_id}`}   className="btn btn-primary">view details</Link>
  </div>
</div>    
            
        </div>
    );
};

export default Service;