import Nav from './components/Nav'
import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
    
      <Nav></Nav>
      <div className='w-full h-screen flex flex-col justify-start items-center'>

          <p className='text-center text-3xl font-bold my-5 max-md:text-xl max-sm:text-lg p-3'>Welcome To JavaScrip Bootcamp By Tuwaiq Academy</p>
        <Link to='/login'>
        <button className="btn bg-[#4F29B7] text-white px-10">SignUp now to register</button>
        </Link>

      </div>
      
    
    </>
  )
}

export default App
