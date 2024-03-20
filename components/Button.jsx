import React from 'react'

function Button(props) {
  return (
    <div className={`cursor-pointer ${props.role === "primary" ? 'bg-white px-12 py-3 text-xl font-semibold rounded-2xl' : props.role === "secondary" ? 'border-white border-2 px-12 py-3 text-xl text-white font-semibold rounded-2xl hover:bg-white hover:text-black' : null} transition-all ease-in-out delay-75`}>
        {props.title}
    </div>
  )
}

export default Button