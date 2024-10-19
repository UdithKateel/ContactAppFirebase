import React from 'react'
import fire1 from '../images/Vector (1).png'
const Navbar = () => {
  return (
    <div className='h-[60px]  bg-white rounded-lg m-4 flex justify-center'>
        <div className='flex items-center gap-3 text-xl font-medium'><img src={fire1} alt="" />
        <h1>Firebase Contact App</h1>
        
        </div>
    </div>
  )
}

export default Navbar