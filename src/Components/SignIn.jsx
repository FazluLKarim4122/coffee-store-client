
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



const SignIn = () => {
    const {signInUser} = useContext(AuthContext)
    const handleSignIn=(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const updatedUser= {email, password}
        console.log(updatedUser);
        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            //to update we can use email like _id cause,email would be unique.so we want to update & send info to the database of last loggin user information
            const user ={
                email,
                lastSignInAt: result.user?.metadata?.lastSignInTime ,
            }
            //update lastSignInAt in the database first create api in the server
            //2nd fetch route যেহেতু dynamic করি নাই তাই user route এ use করবো 
            fetch('https://coffee-store-server-blue-six.vercel.app/user',{
                method: 'PATCH',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
            })

        })
        .catch(error =>{
            console.log(error);
        })
        
    }
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <h2>Please sign in</h2>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                <form className="card-body" onSubmit={handleSignIn}>
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

export default SignIn;