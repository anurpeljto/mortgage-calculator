import React, {useState} from 'react'

const Radio = ({id, label, name, isActive, handleSetActive}) => {

  return (
    <div onClick={() => handleSetActive(id)} className='flex w-full h-full p-4 gap-2 group focus-within:bg-lime border-slate_500 border focus-within:bg-opacity-20 rounded-lg focus-within:ring-1 ring-lime focus-within:border-lime'>
        <input name={name} type="radio" id={id} className='peer h-6 w-6 appearance-none mt-1 border-2 rounded-full checked:border-lime border-slate_700 border-opacity-100'/>
        <div className={`absolute w-3 h-3 ml-1.5 mt-2.5 rounded-full ${isActive == id ? `block` : `hidden`} bg-lime`}></div>
        <label htmlFor={id} className='cursor-pointer font-custom text-lg mt-1 text-slate_900 font-bold'>{label}</label>
    </div>
  )
}

export default Radio