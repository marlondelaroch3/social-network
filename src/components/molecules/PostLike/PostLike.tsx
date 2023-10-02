import React from 'react'
import Button from '../../atoms/Button/Button'
import likeIcon from '../../../assets/like.png'

type TPostLike = {
    like: number
    id: string;
}
const PostLike = ({ id, like }: TPostLike): JSX.Element => {
    const handleClick = () => {
    }
    return (
        <div id='postLikeButtonContainer'>
            <Button id={id} handleClick={handleClick}><img width='100%' src={likeIcon} /><span style={{ position: 'absolute' }}>{like}</span></Button>
        </div>
    )
}

export default PostLike
