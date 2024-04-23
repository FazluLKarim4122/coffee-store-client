import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, NavLink, useLoaderData } from 'react-router-dom'
import CoffeeCard from './Components/CoffeeCard'

function App() {
 const loadedcoffees = useLoaderData()
 //plural coffees গুলাকে একটা state এ set করতে পারি। তারপর যখন কোন একটাকে delete করবো এই state টাকে সরানোর একটা ফাংশন card এ পাঠায় দিবো সে ঐ আগের data গুলাকে রেখে reset করে data গুলো সরায় দিবে। coffees, setCoffees পাঠায় দিবো ঐ state এ। 
 const [coffees , setCoffees] = useState(loadedcoffees)

  return (
    <>
      <div className='space-x-2'>
      <NavLink to='/addCoffee'> Add coffee</NavLink>
      <NavLink to='/updateCoffee'> Update coffee</NavLink>
      <NavLink to='/signup'>SignUp</NavLink>
      <NavLink to='/signin'>SignIn</NavLink>
      <NavLink to='/users'>Users</NavLink>
      </div>
      <h1 className='text-2xl font-extrabold'>Total Coffees {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
      {
        coffees.map((coffee, idx)=><CoffeeCard key={idx} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
      }
      
      </div>
    </>
  )
}

export default App
