import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../redux/store/store';
import { changePostInView } from '../../../redux/reducers/arrowNavigationSlice';
import Arrows from '../../molecules/Arrows/Arrows';

const ARROW_DIRECTION_UP = 'arrow-up';
const ARROW_DIRECTION_DOWN = 'arrow-down';
const SCROLL_BEHAVIOR = 'smooth';

const ArrowNavigation = ({ postLength }: { postLength: number }) => {
    const postInView = useSelector((state: RootState) => state.arrowNavigation.postInView);
    const dispatch = useAppDispatch();

    const scrollSmoothlyTo = (newPostInView: number) => {
        const targetElement = document.querySelector(`#post-${newPostInView}`);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: SCROLL_BEHAVIOR });
        }

    };

    const updatePostInView = (newPostInView: number) => {
        dispatch(changePostInView(newPostInView));
        scrollSmoothlyTo(newPostInView);
    };

    const handleArrowClick = (arrowDirection: string) => {
        if (arrowDirection === ARROW_DIRECTION_UP && postInView > 0) {
            updatePostInView(postInView - 1);
        } else if (arrowDirection === ARROW_DIRECTION_DOWN && postInView < postLength - 1) {
            updatePostInView(postInView + 1);
        }
    };

    return (
        <div style={{ position: 'fixed', right: '50px', height: '100%', display: 'flex', alignItems: 'center', zIndex: 0, width: '10%' }}>
            <Arrows handleClick={handleArrowClick} />
        </div>
    );
};

export default ArrowNavigation;
