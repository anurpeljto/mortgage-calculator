import React, { useEffect, useState } from 'react'
import CardComponent from './CardComponent'
import InverseCard from './InverseCard'
import MortgageType from './MortgageType'
import CalculateButton from './CalculateButton'

const CalculatorLeftPart = ({mortgageAmount, setMortgageAmount, mortgageTerm, setMortgageTerm, interestRate, setInterestRate, mortgageType, setMortgageType, monthlyPayment, setMonthlyPayment, totalPayment, setTotalPayment}) => {

  const [amountError, setAmountError] = useState(true);
  const [termError, setTermError] = useState(true);
  const [interestError, setInterestError] = useState(true);
  const [typeError, setTypeError] = useState(true);
  const [errorState, setErrorState] = useState(false);

  const [error, setError] = useState(true);

  const checkErrorAmount = () => {
    if (mortgageAmount <= 0  && errorState == true){
      setAmountError(true);
    }
    else {
      setAmountError(false);
    }
    console.log('amt error: ', amountError);
    console.log('mortgage amount: ', mortgageAmount)
  }

  const checkTermError = () => {
    if (mortgageTerm == 0 && errorState == true) {
      setTermError(true);
    }
     else{
      setTermError(false);
     }
  }


  const checkInterestError = () => {
    if (interestRate == 0  && errorState == true) {
      setInterestError(true);
    }
    else {
      setInterestError(false);
    }
  }

  const checkTypeError = () => {
    if (mortgageType == '' && errorState == true){
      setTypeError(true);
    }
    else {
      setTypeError(false);
    }
  }

  const checkError = () => {
    if (amountError == true || interestError == true || typeError == true || termError == true){
      setError(true);
    }
    else {
      setError(false);
    }
  }

  useEffect(() => {
    checkErrorAmount();
    checkInterestError();
    checkTermError();
    checkTypeError();
    checkError();
  }, [mortgageAmount, mortgageTerm, mortgageType, interestRate, errorState]);

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

        <form>
        <CardComponent setMortgageAmount={setMortgageAmount} mortgageAmount={mortgageAmount} amountError={amountError} setAmountError={setAmountError}/>

        <div className='flex flex-row gap-2 items-center justify-center'>
            <InverseCard title={"Mortgage Term"} value={"years"} setMortgageTerm={setMortgageTerm} setInterestRate={setInterestRate} mortgageTerm={mortgageTerm} interestRate={interestRate} interestError={interestError} setInterestError={setInterestError} setTermError={setTermError} termError={termError}/>
            <InverseCard title={"Interest Rate"} value={"%"} setMortgageTerm={setMortgageTerm} setInterestRate={setInterestRate} mortgageTerm={mortgageTerm} interestRate={interestRate} interestError={interestError} setInterestError={setInterestError} setTermError={setTermError} termError={termError}/>
        </div>

        <MortgageType typeError={typeError} errorState={errorState} setErrorState={setErrorState} error={error} calculateMonthlyPayment={calculateMonthlyPayment} mortgageType={mortgageType} setMortgageType={setMortgageType}/>
        </form>
    </div>
  )
}

export default CalculatorLeftPart