import React, { useCallback, useState } from 'react'
import Title from './Title'
import Age from './Age'
import Button from './Button'
import Salary from '../UseCallback/Salary'

const DiffParent = () => {
    const [age, setAge] = useState(10)
    const [salary, setSalary] = useState(1234)

    const incrementAge = useCallback(() => {
        setAge((age) => age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary((salary) => salary + 1)
    }, [salary])
  return (
    <div>
      <Title></Title>
      <Age age={age}></Age>
      <Button handleClick={incrementAge}>Increment</Button>
      <Salary salary={salary}></Salary>
      <Button handleClick={incrementSalary}>Increment</Button>
    </div>
  )
}

export default DiffParent
