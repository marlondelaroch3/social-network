import React from 'react'
import IText from '../../../types/Text';
import IProfileImage from '../../../types/ProfileImage';
import Text from '../../atoms/Text/Text';
import ProfileImage from '../../atoms/ProfileImage/ProfileImage';
import styles from './Profile.module.css'

interface IProfile extends IText, IProfileImage {
    order: 'firstName' | 'firstImage'
    email?: string
}

const FIRST_NAME_ORDER = 'firstName';

const Profile = ({ email, text, type, image, alt, width, height, order }: IProfile): JSX.Element => {
    return (
        <div style={{ display: 'flex' }}>
            {order === FIRST_NAME_ORDER
                ? (
                    <>
                        <div className={styles.containerTexts}>
                            <Text text={text} type={type} />
                            {email && <Text text={email} type={type} />}
                        </div>
                        <ProfileImage image={image} alt={alt} width={width} height={height} />

                    </>
                )
                : (
                    <>
                        <ProfileImage image={image} alt={alt} width={width} height={height} />
                        <Text text={text} type={type} />
                    </>
                )
            }
        </div>
    )

}

export default Profile
