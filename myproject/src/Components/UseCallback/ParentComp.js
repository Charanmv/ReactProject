import React, { useCallback, useState } from 'react'
import Title from './Title'
import Age from './Age'
import Button from './Button'
import Salary from './Salary'

const ParentCompCallback = () => {
  console.log("parent")
    const [age, setAge] = useState(20)
    const [sal, setSalary] = useState(1234)

    const incAge = useCallback(() => {
        setAge((age) => age + 1)
    }, [age])
    const incSal = useCallback(() => {
        setSalary((sal) => sal * 10)
    }, [sal])
  return (
    <div>
      <Title></Title>
      <Age age={age}></Age>
      <Button handleClick={incAge}>Increment Age</Button>
      <Salary sal={sal}></Salary>
      <Button handleClick={incSal}>Increment Salary</Button>
    </div>
  )
}

export default React.memo(ParentCompCallback)
