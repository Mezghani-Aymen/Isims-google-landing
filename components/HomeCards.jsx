import React from 'react'
// import img from './files/Layer_1.png'


function HomeCards(props) {
  return (
    <div className={`w-40 h-52 scale-125 flex flex-col justify-evenly items-center drop-shadow-[5px_5px_1px_rgba(0,0,0,0.5)]`}>
        <div className={`absolute w-40 h-52 opacity-70 rounded-2xl bg-gradient-to-br ${props.bg === "red" ? "from-red-700" : props.bg === "blue" ? "from-blue-700" : "from-green-700"}`} />
        <img src={props.img} alt='logo' className='w-24 z-10' />
        <p className='text-white text-2xl opacity-80 drop-shadow-sm capitalize z-10'>{props.title}</p>
    </div>
  )
}

export default HomeCards