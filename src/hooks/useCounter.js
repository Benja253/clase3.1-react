import { useState } from "react"

const useCounter = (initialValue, resetValue = 0) => {
  const [count, setCount] = useState(initialValue)

  const plusOne = () => setCount(count + 1)
  
  const minusOne = () => setCount(count - 1)

  const resetCounter = () => setCount(resetValue)

  return [count, plusOne, minusOne, resetCounter]
}

export default useCounter