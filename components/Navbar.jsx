import React from 'react'
import logo from './files/googleLogo.png'

function Navbar() {
  return (
    <nav className='absolute top-0 left-0 w-screen z-50' >
        <div className='absolute top-0 right-0 bg-[rgba(255,255,255,0.10)] rounded-xl drop-shadow-xl blur-lg border-[rgba(255,255,255,0.31)] border-2 w-screen h-20 z-0' />
        <div className='text-white flex justify-around items-center text-2xl'>
            <img src={logo} alt='logo' />
            <ul className='flex gap-6 z-10'>
                <li className='hover:underline cursor-pointer'>Home</li>
                <li className='hover:underline cursor-pointer'>Events</li>
                <li className='hover:underline cursor-pointer'>Teams</li>
                <li className='hover:underline cursor-pointer'>Glory</li>
                <li className='hover:underline cursor-pointer'>Contact</li>
            </ul>
            <p className='border-2 px-5 pb-1 rounded-full hover:bg-white hover:text-black cursor-pointer z-10 ease-in-out transition-all delay-75'>Signup</p>
        </div>
    </nav>
  )
}

export default Navbar