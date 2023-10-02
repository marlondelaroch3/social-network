import React from 'react'
import ISelect from '../../../types/Select'



const Select = ({ id, options, handleChange }: ISelect): JSX.Element => {
  return (
    <>
      <select onChange={handleChange} name={id} id={id}>
        <option value='tag' hidden selected>Tag</option>
        {
          options?.map((option) => <option key={option} value={option}>{option}</option>)
        }
      </select>
    </>
  )
}

export default Select
