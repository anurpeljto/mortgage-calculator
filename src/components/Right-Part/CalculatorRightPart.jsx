import React, { useState, useEffect } from 'react'
import empty from '../../assets/images/illustration-empty.svg';
import MonthlyDisplay from './MonthlyDisplay';

const CalculatorRightPart = ({visible, totalPayment, monthlyPayment}) => {
  const [displayedMonthly, setDisplayedMonthly] = useState('');
  const [displayedTotal, setDisplayedTotal] = useState('');

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const displayNumbers = () => {
    if (monthlyPayment >= 1000 || totalPayment >= 1000) {
      setDisplayedMonthly(formatNumber(monthlyPayment));
      setDisplayedTotal(formatNumber(totalPayment));
    } else {
      setDisplayedMonthly(monthlyPayment.toFixed(2));
      setDisplayedTotal(totalPayment.toFixed(2));
    }
  };

  useEffect(() => {
    displayNumbers();
  }, [monthlyPayment, totalPayment]);

  return (
    <div className={`flex flex-col p-10 gap-2 flex-1 w-full h-full items-start justify-start bg-slate_900 sm:rounded-tr-3xl sm:rounded-br-3xl ${visible ? `block`: `hidden`}`}>
      <h1 className='text-2xl font-custom text-whitesmoke font-semibold'>Your results</h1>
      <p className='font-custom text-slate_500'>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>

      <MonthlyDisplay monthlyPayment={displayedMonthly} totalPayment={displayedTotal}/>
    </div>
  )
}

export default CalculatorRightPart