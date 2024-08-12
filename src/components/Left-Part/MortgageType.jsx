import React, { useState, useEffect } from 'react'
import Radio from './Radio'
import CalculateButton from './CalculateButton'


const MortgageType = ({mortgageType, setMortgageType, calculateMonthlyPayment}) => {

  const handleSetActive = (newId) => {
    console.log(newId);
    return setMortgageType(newId);
  }

  // useEffect(() => {
  //   console.log(mortgageType);
  // }, [mortgageType]);


  return (
    <div className='flex flex-col w-full h-full gap-2'>
        <span className='font-custom text-slate_700'>Mortgage Type</span>


        <form className='w-full flex flex-col gap-4 items-start'>
            {/* <input type="radio" id="mortgageType" className='h-6 w-6 appearance-none mt-1 border-2 border-slate_700 rounded-full checked:border-lime border-opacity-100'/>
            <label htmlFor="mortgageType" className='font-custom text-lg mt-1 text-slate_900 font-bold'>Repayment</label> */}
            <Radio id={"Repayment"} name={"mortgageType"} label={"Repayment"} isActive={mortgageType} handleSetActive={handleSetActive} />
            <Radio id={"InterestOnly"} name={"mortgageType"} label={"Interest Only"} isActive={mortgageType} handleSetActive={handleSetActive} />
            <CalculateButton calculateMonthlyPayment={calculateMonthlyPayment}/>
        </form>
    </div>
  )
}

export default MortgageType