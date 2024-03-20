import React, {useState} from 'react'


function InputElement({value, id, width, height, placeholder}) {
    const [active, setActive] = useState(false)
    const [content, setContent] = useState('')
  return (
    <div className='relative'>
        <label className={`absolute left-3 translate-y-[-60%] ease-in-out transition-all delay-75 ${active || content ? 'top-3 text-sm text-gray-400' : 'top-[50%] text-xl text-gray-600 cursor-text'}`} htmlFor={`inputField${id}`}>{placeholder}</label>
        <input type="text" id={`inputField${id}`} onChange={(e) => {value(e.target.value); setContent(e.target.value)}} onFocus={() => setActive(true)} onBlur={() => setActive(false)}
        className={`bg-white border-gray-500 border-2 rounded-lg focus:outline-none px-3 text-xl`} style={{width , height}} />
    </div>
  )
}

export default InputElement