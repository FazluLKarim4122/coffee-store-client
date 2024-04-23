import { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)
    console.log(loadedUsers);
    const handleDelete=(_id)=>{
        console.log(_id);
        fetch(`https://coffee-store-server-blue-six.vercel.app/user/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                console.log('deleted successfully');
                alert('User Deleted Successfully')
                const remainingUsers = users.filter(user => user._id !== _id)
                setUsers(remainingUsers)
            }
        })
    }
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <h2>Total Users: {loadedUsers.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At:</th>
                            <th>Last Sign In:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, idx) => <tr key={idx}>
                                <th>1</th>
                                <td>{user.email}</td>
                                <td>{user.CreatedAt}</td>
                                <td>{user.lastSignInAt}</td>
                                <td>
                                    <button 
                                    onClick={()=>handleDelete(user._id)} className="btn btn-square btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;