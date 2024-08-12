import React, { useEffect, useState } from 'react'
import CardComponent from './CardComponent'
import InverseCard from './InverseCard'
import MortgageType from './MortgageType'
import CalculateButton from './CalculateButton'

const CalculatorLeftPart = ({mortgageAmount, setMortgageAmount, mortgageTerm, setMortgageTerm, interestRate, setInterestRate, mortgageType, setMortgageType, monthlyPayment, setMonthlyPayment, totalPayment, setTotalPayment}) => {

  const calculateMonthlyPayment = () => {
    const principal = parseFloat(mortgageAmount);
    const years = parseFloat(mortgageTerm);
    const interest = parseFloat(interestRate) / 100 / 12;
    const payments = years * 12;

    const x = Math.pow(1 + interest, payments);
    const monthly = (principal * x * interest) / (x-1);

    setMonthlyPayment(monthly.toFixed(2));
    setTotalPayment((monthly * payments).toFixed(2));
  }

  return (
    <div className='bg-whitesmoke w-full h-full flex-1 flex flex-col sm:p-10 p-2 gap-10 sm:rounded-l-lg rounded-lg'>
        <div className='flex flex-row justify-between items-center'>
            <span className='font-custom font-bold text-xl text-slate_900'>Mortgage Calculator</span>
            <span className='font-custom text-normal text-slate_500 underline cursor-pointer'>Clear All</span>
        </div>

        {/* Mortgage amount + card component */}
        <CardComponent setMortgageAmount={setMortgageAmount} mortgageAmount={mortgageAmount}/>

        <div className='flex flex-row gap-2 items-center justify-center'>
            <InverseCard title={"Mortgage Term"} value={"years"} setMortgageTerm={setMortgageTerm} setInterestRate={setInterestRate} mortgageTerm={mortgageTerm} interestRate={interestRate}/>
            <InverseCard title={"Interest Rate"} value={"%"} setMortgageTerm={setMortgageTerm} setInterestRate={setInterestRate} mortgageTerm={mortgageTerm} interestRate={interestRate}/>
        </div>

        <MortgageType calculateMonthlyPayment={calculateMonthlyPayment} mortgageType={mortgageType} setMortgageType={setMortgageType}/>
    </div>
  )
}

export default CalculatorLeftPart