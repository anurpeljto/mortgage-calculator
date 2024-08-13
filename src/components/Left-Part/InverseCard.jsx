import React, {useEffect} from 'react'

const InverseCard = ({title, value, mortgageTerm, setMortgageTerm, interestRate, setInterestRate, interestError, termError, setTermError, setInterestError}) => {
  
  let error;
  
  if (title == 'Interest Rate') {
    error = interestError;
  } else {
    error = termError;
  }

  const handleMortgageTerm = (newTerm) => {
    if (newTerm == 0 || newTerm == null){
      return setTermError(true);
    }
    else {
      return setMortgageTerm(newTerm);
    }
  }

  const handleInterestRate = (newRate) => {
    if (newRate == 0 || newRate == null){
      return setInterestError(true);
    }
    else {
      return setInterestRate(newRate);
    }
    console.log('rate: ', newRate);
  }

  // if (title === 'Mortgage Term') {
  //   useEffect(() => {
  //     console.log(mortgageTerm)
  //   }, [mortgageTerm])
  // }

  // else {
  //   useEffect(() => {
  //     console.log(interestRate);
  //   }, [interestRate]);
  // }
  return (
    error ? (
      <div className='flex group flex-col items-start justify-center w-full gap-2 mb-6'>
        <span className='font-custom text-slate_700'>{title}</span>
        <div className='w-full group flex flex-row gap-0 items-center rounded-lg h-[50px] border border-redcustom focus-within:border-redcustom focus-within:ring-1 focus-within:ring-redcustom'>
          <input required onChange={title === 'Mortgage Term' ? (term) => handleMortgageTerm(term.target.value) : (rate) => handleInterestRate(rate.target.value) } className='w-full h-full m-2 rounded-r-md sm:p-4 text-lg font-custom font-semibold outline-none'></input>
          <div className='w-[50px] p-4 h-full flex items-center justify-center bg-redcustom font-custom text-white group-focus-within:bg-redcustom rounded-r-md group-focus-within:text-white group-focus-within:font-bold'>{value}</div>
        </div>
        <span className='text-redcustom font-custom text-s'>This field is required</span>
    </div>
    ) : (
      <div className='flex group flex-col items-start justify-center w-full gap-2 mb-6'>
        <span className='font-custom text-slate_700'>{title}</span>
        <div className='w-full group flex flex-row gap-0 items-center rounded-lg h-[50px] border border-slate_500 focus-within:border-lime focus-within:ring-1 focus-within:ring-lime'>
          <input required onChange={title === 'Mortgage Term' ? (term) => handleMortgageTerm(term.target.value) : (rate) => handleInterestRate(rate.target.value) } className='w-full h-full m-2 rounded-r-md sm:p-4 text-lg font-custom font-semibold outline-none'></input>
          <div className='w-[50px] p-4 h-full flex items-center justify-center bg-slate_100 font-custom text-slate_700 group-focus-within:bg-lime rounded-r-md group-focus-within:text-slate_900 group-focus-within:font-bold'>{value}</div>
      </div>
    </div>
    )
  )
}

export default InverseCard