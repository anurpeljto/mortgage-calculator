import React from 'react'
import empty from '../../assets/images/illustration-empty.svg';

const CalculatorRightPartEmpty = ({visible}) => {
  return (
    <div className={`flex flex-col p-10 gap-2 flex-1 w-full h-full items-center justify-center bg-slate_900 rounded-tr-3xl rounded-br-3xl ${visible ? `block`: `hidden`}`}>
      <img src={empty} alt="" />
      <h1 className='text-2xl font-bold text-whitesmoke font-custom'>Results shown here</h1>
      <p className='font-semibold text-slate_500 text-center'>Complete the form and click "Calculate Repayments" to see what your monthly repayments would be.</p>
    </div>
  )
}

export default CalculatorRightPartEmpty