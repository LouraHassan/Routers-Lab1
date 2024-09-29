import React from 'react'
import Nav from './Nav'
function Info() {
    return (
        <>
            <Nav></Nav>
    <div className='p-5'>
          <h1 className='text-3xl font-bold py-2'>JavaScript Bootcamp</h1>
          <h3 className='text-xl text-gray-500 py-2'>Starting Date: 25/8/2024</h3>
          <h3 className='text-xl text-gray-500 py-2'>Ending Date: 31/10/2024</h3>
          <h3 className='text-xl text-gray-500 py-2'>Duration: 10 weeks</h3>
          <h3 className='text-xl text-gray-500 py-2'>Location: Riyadh</h3>
          <button className="btn bg-[#4F29B7] text-white px-10">Register Now</button>

    </div>
      </>
  )
}

export default Info
