import React from 'react'
import calculator from '../../assets/images/icon-calculator.svg';

const CalculateButton = ({calculateMonthlyPayment}) => {
  return (
    <button onClick={(e) => {e.preventDefault(); calculateMonthlyPayment()} } type='button' className='cursor-pointer mt-5 flex flex-row gap-1 rounded-full p-2 items-center justify-center sm:w-[300px] sm:h-[60px] bg-lime text-custom font-bold text-slate_900'>
        <img src={calculator} alt="" />
        Calculate Repayments
    </button>
  )
}

export default CalculateButton