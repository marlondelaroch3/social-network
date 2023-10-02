import React from 'react'
import IText from '../../../types/Text'

const Text = ({ text, type }: IText): JSX.Element => {
  return (
    <>
      {
        type === 'h1'
          ? <h1>{text}</h1>
          : <p>{text}</p>
      }
    </>
  )
}

export default Text
