import React, {useState, useEffect} from 'react'
import CalculatorLeftPart from './Left-Part/CalculatorLeftPart'
import CalculatorRightPartEmpty from './Right-Part/CalculatorRightPartEmpty'
import CalculatorRightPart from './Right-Part/CalculatorRightPart';

const Calculator = () => {
  const [mortgageAmount, setMortgageAmount] = useState(0);
  const [mortgageTerm, setMortgageTerm] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [mortgageType, setMortgageType] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const [empty, setEmpty] = useState(false);

  const calculatorProps = {
    mortgageAmount,
    setMortgageAmount,
    mortgageTerm, 
    setMortgageTerm,
    interestRate,
    setInterestRate,
    mortgageType,
    setMortgageType,
    monthlyPayment,
    setMonthlyPayment,
    totalPayment,
    setTotalPayment
  }

  useEffect(() => {
    if (mortgageType && totalPayment > 0 && monthlyPayment > 0 && interestRate > 0 && mortgageTerm > 0 && mortgageAmount > 0) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  }, [mortgageType, totalPayment, monthlyPayment, interestRate, mortgageTerm, mortgageAmount])

  return (
    <div className='w-full sm:mx-40 sm:p-5 sm:pb-0 sm:h-[750px] flex sm:flex-row flex-col justify-center items-center'>
        <CalculatorLeftPart {...calculatorProps}/>
        <CalculatorRightPartEmpty visible={empty}/>
        <CalculatorRightPart visible={!empty} totalPayment={totalPayment} monthlyPayment={monthlyPayment}/>
    </div>
  )
}

export default Calculator