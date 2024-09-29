import React from 'react'

function ErrorPage() {
  return (
    <div className='flex flex-col w-full h-screen justify-center items-center'>
          <p className='text-5xl font-bold'>Ops!!</p>
          <p className='text-3xl font-bold text-red-800'>Page not found</p>
    </div>
  )
}

export default ErrorPage
