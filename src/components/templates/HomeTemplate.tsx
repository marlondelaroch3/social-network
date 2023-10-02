import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../redux/store/store';
import { fetchPosts } from '../../redux/actions/thunks';
import SliderComments from '../organisms/Comments/SliderComments';
import ArrowNavigation from '../organisms/ArrowNavigation/ArrowNavigation';
import Header from '../organisms/Header/Header';
import Post from '../organisms/Post/Post';
import Button from '../atoms/Button/Button';
import Modal from '../atoms/Modal/Modal';
import { IComments } from '../../types/Comments';
import styles from './HomeTemplate.module.css'

const HomeTemplate = () => {
    const [showModal, setShowModal] = useState(false)
    const [comments, setComments] = useState<IComments[]>([{
        id: '',
        message: '',
        post: '',
        publishDate: '',
        owner: {
            firstName: '',
            picture: '',
            title: '',
            lastName: '',
        }
    }])
    const [page, setPage] = useState(0)
    const [fetchByTagLoading, setFetchByTagLoading] = useState(false)
    const dispatch = useAppDispatch();
    const posts = useSelector((state: RootState) => state.posts.posts)
    const type = useSelector((state: RootState) => state.posts.type)
    const isLoading = useSelector((state: RootState) => state.posts.loading)
    const error = useSelector((state: RootState) => state.posts.error)
    const postInView = useSelector((state: RootState) => state.arrowNavigation.postInView)


    useEffect(() => {

        if (!posts.length && type !== 'tag') {
            dispatch(fetchPosts(page))
        }
    }, [page]);

    useEffect(() => {
        if (postInView + 1 === posts.length - 5 && type !== 'tag') {
            const newPage = page + 1
            dispatch(fetchPosts(newPage))
            setPage(newPage)
        }
    }, [postInView]);

    if (isLoading && !posts.length) {

        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }




    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className={styles.headerContainer}>
                <Header setFetchByTagLoading={setFetchByTagLoading} />
            </div>
            <Modal showModal={showModal} setShowModal={() => setShowModal(!showModal)} showOverlay={true} >
                <div style={{ display: 'flex', flexWrap: 'wrap' }} className={styles.modalElementsContainer}>
                    {comments?.map((comment, index) => {
                        return (
                            <div key={index}>
                                <img src={comment.owner.picture} alt='profile-picture' />
                                <p>id: {comment.id}</p>
                                <p>message: {comment.message}</p>
                                <div>
                                    <p>id:{comment.id}</p>
                                    <p>name:{`${comment.owner.title} ${comment.owner.firstName} ${comment.owner.lastName}`}</p>
                                    <p></p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </Modal>
            {
                isLoading && fetchByTagLoading
                    ? <div>Loading...</div>
                    : posts?.map((post, index) => (
                        <div className={styles.postMainContainer} id={`post-${index.toString()}`} key={post.id} style={{
                            width: '60%',
                            height: '100dvh',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Post
                                likes={post.likes}
                                backgroundImage={post.image}
                                tags={post.tags}
                                postText={post.text}
                                userId={post.owner.id}
                                userName={post.owner.firstName}
                                profileImage={post.owner.picture}
                            />
                            <div className={styles.commentsContainer}>
                                <Button style={{ background: 'none', border: 'none', cursor: 'pointer' }} handleClick={() => {
                                    if (post.comments.length) setShowModal(!showModal)
                                    if (post.comments.length) {
                                        setComments(post.comments)
                                    } else {
                                        setComments([])
                                    }
                                }}>
                                    <SliderComments comments={post.comments} />
                                </Button>
                            </div>
                        </div>
                    ))}
            <ArrowNavigation postLength={posts.length} />
        </div>
    )
}

export default HomeTemplate
