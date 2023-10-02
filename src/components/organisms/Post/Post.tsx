import React, { useEffect, useState } from 'react'
import TagsGroup from '../../molecules/TagsGroup/TagsGroup'
import PostLike from '../../molecules/PostLike/PostLike'
import Profile from '../../molecules/Profile/Profile'
import PostText from '../../molecules/PostText/PostText'
import { IPost } from '../../../types/Post'
import Modal from '../../atoms/Modal/Modal'
import Button from '../../atoms/Button/Button'
import styles from './Post.module.css'


const app_id = process.env.REACT_APP_APP_ID;
const url = process.env.REACT_APP_API_URL;
const headers = app_id ? ({ 'app-id': app_id } as HeadersInit) : undefined;

interface IUserData {
    dateOfBirth: string;
    email: string;
    firstName: string;
    gender: string;
    id: string;
    lastName: string;
    location: {
        city: string;
        country: string;
        state: string;
        street: string;
        timezone: string;
    };
    phone: string;
    picture: string;
    title: string;
}
const Post = ({ backgroundImage, tags, postText, userName, profileImage, likes, userId }: IPost): JSX.Element => {
    const [showModal, setShowModal] = useState(false)
    const [userData, setUserData] = useState<IUserData>({
        dateOfBirth: '',
        email: '',
        firstName: '',
        gender: '',
        id: '',
        lastName: '',
        location: {
            city: '',
            country: '',
            state: '',
            street: '',
            timezone: '',
        },
        phone: '',
        picture: '',
        title: '',
    })

    useEffect(() => {
        fetch(`${url}/user/${userId}`, { headers })
            .then((response => response.json()))
            .then(userData => {
                setUserData(userData)
            })

    }, []);
    return (
        <div className={styles.postContainer} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <TagsGroup tags={tags} type={'p'} />
                <PostLike id='likeButton' like={likes} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Modal showModal={showModal} setShowModal={() => setShowModal(!showModal)} showOverlay={true} >
                    <img src={userData.picture} /><h1>Name: {`${userData.title} ${userData.firstName} ${userData.lastName}`}</h1>
                    <p>User Id: {userData.id}</p>
                    <p>Gender: {userData.gender}</p>
                    <p>Phone: {userData.phone}</p>
                    <p>Email: {userData.email}</p>
                    <p>Location: {`${userData.location.street} ${userData.location.state} ${userData.location.city} ${userData.location.country}`}</p>
                    <p>Timezone: {userData.location.timezone}</p>
                    <p>DOB: {userData.dateOfBirth}</p>
                </Modal>
                <Button id='postProfileButton' style={{ background: 'none', border: 'none', cursor: 'pointer' }} handleClick={() => setShowModal(!showModal)}>
                    <Profile order={'firstImage'} type={'h1'} image={profileImage} text={userName} alt={'profile-image'} width={'100px'} height={'100px'} />
                </Button>
                <PostText text={postText} type={'p'} />
            </div>
        </div>
    )
}

export default Post
