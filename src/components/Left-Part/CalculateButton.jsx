import React, { useEffect } from 'react'
import calculator from '../../assets/images/icon-calculator.svg';

const CalculateButton = ({calculateMonthlyPayment, error, errorState, setErrorState}) => {

  const handleSubmitButton = (e) => {
    e.preventDefault();
    console.log('error: ',error);
    if (error) {
      setErrorState(true);
    }
    else {
      setErrorState(false);
      calculateMonthlyPayment();
      console.log('works');
    }
  }

  return (
    <button type='submit' onClick={handleSubmitButton} className={`cursor-pointer ${errorState == true ? `mt-2` : `mt-10`} flex flex-row gap-1 rounded-full p-2 items-center justify-center sm:w-[300px] sm:h-[60px] bg-lime text-custom font-bold text-slate_900`}>
        <img src={calculator} alt="" />
        Calculate Repayments
    </button>
  )
}

export default CalculateButton