import React, {useEffect} from 'react'

const CardComponent = ({setMortgageAmount, mortgageAmount}) => {
  useEffect(() => {
    console.log(mortgageAmount)
  }, [mortgageAmount]);

  const handleSetMortgage = (newMortgage) => {
    return setMortgageAmount(newMortgage);
  }

  return (
    <div className='flex flex-col gap-2 items-start'>
      <span className='font-custom text-slate_700'>Mortgage Amount</span>
        <div className='w-full group flex flex-row gap-0 items-center rounded-lg h-[50px] border border-slate_500 focus-within:border-lime focus-within:ring-1 focus-within:ring-lime'>
          <div className='w-[50px] rounded-l-md h-full flex items-center justify-center bg-slate_100 font-custom text-slate_700 group-focus-within:bg-lime group-focus-within:text-slate_900 group-focus-within:font-bold'>£</div>
          <input onChange={(input) => handleSetMortgage(input.target.value)} className='w-full h-full rounded-r-md p-4 text-lg font-custom font-semibold outline-none'></input>
      </div>
    </div>
  )
}

export default CardComponent