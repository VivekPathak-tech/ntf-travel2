import React from 'react'

function Button({onClick, children, className='', style={}}) {
    return (
        <button 
        style={style}
         onClick={onClick} 
         className={`${className} flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#F9B545] hover:text-white active:scale-95
         border text-sm size-10 s:text-[17px] s:size-12 cursor-pointer rounded-full`}
        >
            {children}
        </button>
    )
}

export default Button