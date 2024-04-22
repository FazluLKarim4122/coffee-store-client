import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
 

  return (
    <>
      <Link to='/addCoffee'> Add coffee</Link>
      <Link to='/updateCoffee'> Update coffee</Link>
      <h1 className='text-2xl font-extrabold'>Vite + React</h1>
      
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <button className='btn btn-secondary '>Click</button>
      
    </>
  )
}

export default App
