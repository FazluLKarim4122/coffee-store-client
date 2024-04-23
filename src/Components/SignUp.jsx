import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {
    const {createUser}= useContext(AuthContext)
    const handleSignUp=(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
            // you can send user creating time from metadata
            const createdAt = result.user.metadata.creationTime;
            // new user has been created-firebase এ তো আছেই যদি local database এ রাখতে চাই
            const user = {email , CreatedAt: createdAt}
            fetch('http://localhost:5000/user',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json',
                },
                body: JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Congrats',
                        text: 'You are signing up successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
        })
        .catch(error =>{
            console.log(error);
        })
        
    }
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <h2 className="text-2xl text-slate-700 font-bold text-center">Please sign up</h2>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                <form className="card-body" onSubmit={handleSignUp}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" 
                        name="email"
                        className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" 
                        name="password"
                        className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">SignUp</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default SignUp;