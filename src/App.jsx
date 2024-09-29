import Nav from './components/Nav'
import './App.css'
import { Route } from 'react-router-dom'

function App() {

  return (
    <>
    
      <Nav></Nav>
      <div className='w-full h-screen flex flex-col justify-start items-center'>

          <p className='text-3xl font-bold my-5'>Welcome To JavaScrip Bootcamp By Tuwaiq Academy</p>
          <p className='text-xl '>SignUp now to register</p>
      </div>
      
    
    </>
  )
}

export default App
