import React from 'react';
import useTitle from '../../Hooks/UseTitle';
// import { useState } from 'react';

const AddService = () => {
    
    useTitle('AddService')
    // const [addService,setAddService] =useState([])

    const handleAddService =event=>{
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const ratings = form.ratings.value
        const price =form.price.value
        // const email = user?.email || 'unregister'
        const img = form.photoURL.value;
        const description = form.message.value;
        console.log(name,
            img,
            description);


            const addService = {

                 name,
                img,
                ratings,
                description,
                price,
            //    service:_id,
            //     email,
            }
        

            fetch('https://b6a11-service-review-server-side-mohammadibrahim11.vercel.app/services',{
                method:'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(addService)

            })
            .then(res =>res.json())
            .then( data => {
                console.log(data)
            if(data.acknowledged){
                alert('added service successfully')
                form.reset();
            }})
               .catch(error => console.error(error));



    }

   
          
    return (
        <div  className='shadow w-50 m-auto mt-5'>

            <div className='fs-3 text-danger text-center'>
                Add a Service
            </div>
            

            <form onSubmit={handleAddService}>
                <div>
                    <input type="text" name='name'
                    placeholder='service name' className='m-2'  />

            

                    <input type="photoURL" name='photoURL'
                    placeholder='photo'  /> 
                    <br />

                    <input type="number" name='ratings'
                    placeholder='ratings'className='m-2' /> 
                  

                    <input type="text" name='price'
                    placeholder='price'/> 
                </div>
                <br />
                <textarea name="message" id="" cols="30" rows="10" className='w-30' placeholder='service description' ></textarea>

               <div>
               <input className='btn btn-danger m-2' type="submit" value="add a service" />
             
               </div>
            </form>
        </div>
    );
};

export default AddService;