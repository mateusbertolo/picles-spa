import { useState } from 'react'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count [count, setCount] = useState(0)
    </button>
  )
}
