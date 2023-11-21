import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import logo from './assets/logo.png'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='bg-black h-[9.5vh] text-decoration-none list-none'>
                <div className=' flex text-white pl-[15vw] pt-5'>
                    <div className=''>
                        <li>
                            <Link to="/">Home</Link>
                        </li></div>
                    <div className='ml-7'>
                        <li>
                            <Link to="/genre">Genre</Link>
                        </li>
                    </div>
                    <div className='ml-7'>
                        <li>
                            <Link to="/country">Country</Link>
                        </li>
                    </div>
                    <div className='ml-7'>
                        <li>
                            <Link to="/movie">Movie</Link>
                        </li>
                    </div>
                </div>
                <input type="text" placeholder='Search' className='float-right mr-5 -mt-7 w-[15vw] h-9 rounded placeholder:pl-2' />
                <img src='/images/logo.png' className='h-10 ml-5 -mt-[4vh] rounded' />
            </div>
            <Outlet/>
        </div>
    )
}

export default Navbar
