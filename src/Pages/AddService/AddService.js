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
        

            fetch('http://localhost:5000/services',{
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

    // <a href="https://ibb.co/PWV7Nz4"><img src="https://i.ibb.co/myPLGFt/image.jpg" alt="image" border="0"></a>
          
    return (
        <div>
            add a reviews for me.please!

            <form onSubmit={handleAddService}>
                <div>
                    <input type="text" name='name'
                    placeholder='service name'  />

                    <input type="photoURL" name='photoURL'
                    placeholder='photo'/> 

                    <input type="number" name='ratings'
                    placeholder='ratings'/> 

                    <input type="text" name='price'
                    placeholder='price'/> 
                </div>

                <textarea name="message" id="" cols="30" rows="10" className='w-30' placeholder='service description' ></textarea>

               <div>
               <input className='btn btn-danger' type="submit" value="add a service" />
             
               </div>
            </form>
        </div>
    );
};

export default AddService;