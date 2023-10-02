import React from 'react'

interface IButton {
  children: React.ReactNode;
  handleClick: () => void;
  style?: object;
  id?: string;
}

const Button = ({ id, children, handleClick }: IButton): JSX.Element => {
  return (
    <>
      <button style={{
        backgroundColor: 'transparent', cursor: 'pointer'
      }} id={id} onClick={handleClick}>{children}</button>
    </>
  )
}

export default Button
