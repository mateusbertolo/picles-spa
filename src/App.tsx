import { useState } from 'react'
import { Button } from './components/common/Button'
import { ButtonVariant } from './components/common/Button/button.constant'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {count}
    <Button variant= {ButtonVariant.Default} onClick={() => setCount(count + 1)}>Quero adotar</Button>
    <Button variant= {ButtonVariant.Disabled}onClick={() => setCount(count + 1)}>Quero adotar</Button>
    </>
  )
}
