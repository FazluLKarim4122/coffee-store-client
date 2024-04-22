import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const {_id, name, chefName, quantity, supplier, taste, category, details, photo } = coffee

    const handleUpdateCoffee =(e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const quantity = form.quantity.value
        const chefName = form.chefName.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const updateCoffee = {name, chefName,quantity,supplier,taste,category,details,photo}
        console.log(updateCoffee);
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type' : 'application/json',
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee updated in the Database successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    

    return (
        <div>
            <Link to='/'>Home</Link>
            <h1 className='text-2xl text-center mt-1'>Update a coffee: {name}</h1>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl  container mx-auto bg-[#F4F3F0] mt-5 ">
                <form className="card-body" onSubmit={handleUpdateCoffee}>
                    <div >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter coffee name"
                             name='name' 
                             defaultValue={name}
                             className="input input-bordered"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" placeholder="Enter coffee chef"
                            name='chefName' 
                            defaultValue={chefName}
                             className="input input-bordered"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" placeholder="Available quantity" 
                            name='quantity'
                            defaultValue={quantity}
                            className="input input-bordered"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" placeholder="Enter coffee supplier"
                             name='supplier'
                             defaultValue={supplier}
                             className="input input-bordered"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" placeholder="Enter coffee Taste"
                             name='taste'
                             defaultValue={taste}
                             className="input input-bordered"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" placeholder="Enter coffee category"
                             name='category'
                             defaultValue={category}
                             className="input input-bordered"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" placeholder="Enter coffee details"
                             name='details'
                             defaultValue={details}
                             className="input input-bordered"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" placeholder="Enter Photo url" 
                            name='photo'
                            defaultValue={photo}
                            className="input input-bordered"  />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update Coffee</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;