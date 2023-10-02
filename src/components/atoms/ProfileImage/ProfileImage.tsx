import React from 'react'
import IProfileImage from '../../../types/ProfileImage'

const ProfileImage = ({ image, alt, width, height }: IProfileImage): JSX.Element => {

  return (
    <>
      <img style={{ borderRadius: '50%' }} src={image} alt={alt} width={width} height={height} />
    </>
  )
}

export default ProfileImage
