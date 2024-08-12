import React from 'react'

const MonthlyDisplay = ({monthlyPayment, totalPayment}) => {
  return (
    <div className='mt-10 w-full flex flex-col rounded-t-lg border-2 border-l-0 border-b-0 border-r-0 p-4 border-t-yellow-300'>
        <span className='font-custom text-slate_500 text-lg'>Your monthly repayments</span>
        <h1 className='text-6xl mt-2 text-lime font-custom'>£{monthlyPayment}</h1>
        <div className='w-full h-[1px] bg-slate_700 mt-10'>
        </div>


        <div className='mt-5'>
            <span className='font-custom text-slate_500 text-lg'>Total you'll repay over the term</span>
            <h1 className='text-2xl mt-2 text-white font-custom'>£{totalPayment}</h1>
        </div>


    </div>
  )
}

export default MonthlyDisplay