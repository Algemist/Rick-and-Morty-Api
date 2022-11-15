import React from 'react';
import {AiOutlineHeart} from 'react-icons/ai';
import styles from './likeButton.module.css';
interface ILikeButton {
    onClick: () => void
}

const LikeButton = ({
    onClick
}: ILikeButton) => {
    return (
        <button onClick={onClick} className={styles.btn}>
            <AiOutlineHeart />
        </button>
    );
};

export default LikeButton;