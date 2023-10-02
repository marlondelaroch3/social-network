import React from 'react'
import Text from '../Text/Text'
import {ITag} from '../../../types/Tag'

const Tag = ({ text, type }: ITag): JSX.Element => {
  return (
    <div style={{ width: 'fit-content', padding: '10px' }}>
      <Text text={text} type={type} />
    </div>
  )
}

export default Tag
