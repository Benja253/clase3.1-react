import React from 'react'
import useCounter from '../hooks/useCounter'

const CardCounter = () => {

  const [counter, plusOne, minusOne, resetCounter] = useCounter(-50, 100)

  return (
    <>
      <h1 style={{color: 'white'}}>{counter}</h1>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetCounter}>Reset</button>
      <button onClick={plusOne}>+1</button>
    </>
  )
}

export default CardCounter