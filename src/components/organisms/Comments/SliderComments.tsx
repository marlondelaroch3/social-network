import React, { useEffect, useRef, useState } from 'react'
import styles from './SliderComments.module.css'
import Profile from '../../molecules/Profile/Profile';
import PostText from '../../molecules/PostText/PostText';
import Slide from '../../molecules/Slider/Slide';
import { IComments } from '../../../types/Comments';

interface ISliderComments {
    comments: IComments[]
}
const DELAY = 2500;


const SliderComments = ({ comments }: ISliderComments): JSX.Element => {


    const [index, setIndex] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        if (comments.length) {


            resetTimeout();
            timeoutRef.current = setTimeout(
                () =>
                    setIndex((prevIndex) =>
                        prevIndex === comments.length - 1 ? 0 : prevIndex + 1
                    ),
                DELAY
            );

            return () => {
                resetTimeout();
            };
        }
    }, [index]);

    return (
        <div style={{ width: '100%' }}>

            <div className={styles.slideshow}>
                <div
                    className={styles.slideshowSlider}
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {!comments.length
                        ? <h1>No comments</h1>
                        : comments.map((comment: IComments, index: number) => (
                            <Slide key={index} index={index}>
                                <Profile
                                    order={'firstImage'}
                                    type={'p'}
                                    image={comment.owner.picture}
                                    alt={''}
                                    width={''}
                                    height={''}
                                    text={comment.owner.firstName} />
                                <PostText type={'p'} text={comment.message} />
                            </Slide>)
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SliderComments
