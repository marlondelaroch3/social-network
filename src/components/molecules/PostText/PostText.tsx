import React from 'react'
import Text from '../../atoms/Text/Text'
import IText from '../../../types/Text'

const PostText = ({ text, type }: IText): JSX.Element => {
    return (
        <div id='postTextContainer'>
            <Text text={text} type={type} />
        </div>
    )
}

export default PostText
