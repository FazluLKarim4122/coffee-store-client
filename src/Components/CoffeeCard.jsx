
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const {_id, name, chefName, quantity, supplier, taste, category, details, photo } = coffee
    
    
    //Delete Operation
    const handleDelete =(_id)=>{
        console.log('deleted id: ',_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           
            // console.log('Delete Confirmed');
            // সে যদি confirm করে যে delete করবো, তাহলে  এটার ভিতরে আসতেছে তাই এখানে fetch করবো। route নিয়া আসলাম ,কারণ id টা পাঠাতে হবে
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                       Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success"
              });
              //যতগুলা coffees আছে সেগুলা কে filter করে দেখবো যে ঐ cofee গুলোকে select করবো যেটাকে আমি _id দিয়ে delete করছি , filter করে। 
              const remaining = coffees.filter(cof => cof._id !== _id)
              setCoffees(remaining)
                }
            })
            }
          });
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                <div className=" flex w-full justify-between p-4">
                    <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{chefName}</p>
                    <h2>{quantity}</h2>
                    <h3>{supplier}</h3>
                    </div>
                    <div className="join join-vertical space-y-2">
                        <button className="btn join-item">View</button>
                        <Link to={`/updateCoffee/${_id}`}>
                        <button className="btn join-item">Edit</button>
                        </Link>
                        <button onClick={()=>handleDelete(_id)} className="btn join-item bg-red-500">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;