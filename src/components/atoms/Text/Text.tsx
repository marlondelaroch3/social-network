import React from 'react'

interface TextProps {
  text: string;
  color: string;
  type: 'h1' | 'p';
}

const Text: React.FC<TextProps> = ({ text, color, type }) => {
  return (
    <>
      {
        type === 'h1'
          ? <h1 style={{ color: color }}>{text}</h1>
          : <p style={{ color: color }}>{text}</p>
      }
    </>
  )
}

export default Text
