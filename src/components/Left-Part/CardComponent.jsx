import React, {useEffect} from 'react'

const CardComponent = ({setMortgageAmount, mortgageAmount, amountError, setAmountError}) => {
  useEffect(() => {
    console.log(mortgageAmount)
  }, [mortgageAmount]);

  const handleSetMortgage = (newMortgage) => {
    if (newMortgage == 0) {
      return setAmountError(true)
    }
    else {
      return setMortgageAmount(newMortgage);
    }
  }

  return (
    amountError ? (
      <div className='flex flex-col gap-4 items-start mb-6'>
      <span className='font-custom text-slate_700'>Mortgage Amount</span>
        <div className='w-full group flex flex-row gap-0 items-center rounded-lg h-[50px] border border-redcustom focus-within:border-redcustom focus-within:ring-1 focus-within:ring-redcustom'>
          <div className='w-[50px] rounded-l-md h-full flex items-center justify-center bg-redcustom font-custom text-whitesmoke group-focus-within:bg-redcustom group-focus-within:text-white group-focus-within:font-bold'>£</div>
          <input type='number' onChange={(input) =>{
            const val = input.target.value;
            handleSetMortgage(val === '' ? 0 : Number(val))
            }
           } required className='w-full h-full rounded-r-md p-4 text-lg font-custom font-semibold outline-none'></input>
      </div>
      <span className='font-custom text-redcustom'>This field is required</span>
    </div>
    ) :
    (
      <div className='flex flex-col gap-4 items-start mb-6'>
      <span className='font-custom text-slate_700'>Mortgage Amount</span>
        <div className='w-full group flex flex-row gap-0 items-center rounded-lg h-[50px] border border-slate_500 focus-within:border-lime focus-within:ring-1 focus-within:ring-lime'>
          <div className='w-[50px] rounded-l-md h-full flex items-center justify-center bg-slate_100 font-custom text-slate_700 group-focus-within:bg-lime group-focus-within:text-slate_900 group-focus-within:font-bold'>£</div>
          <input type='number' min={0} onChange={(input) =>{
            const val = input.target.value;
            handleSetMortgage(val === '' ? 0 : Number(val))
            }
           } required className='w-full h-full rounded-r-md p-4 text-lg font-custom font-semibold outline-none'></input>
      </div>
    </div>
    )
  )
}

export default CardComponent