import React from 'react'
import Navbar from '../Components/Navbar'
import logo from './logo.png'



export default function Homepage() {
  return (
    <div>
      <Navbar/>    
      <div className='mr-4 mx-4 mt-4 bg-white'>
        <div className="flex justify-center items-center ">
          <img src={logo} alt="Mon logo" className="h-60" />
        </div>
        
        <div>
          coucou
        </div>


      </div>
    </div>
  )
}
