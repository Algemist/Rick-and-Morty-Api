import React from 'react';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import styles from './likeButton.module.css';
interface ILikeButton {
    onClick: () => void,
    liked: boolean,
}

const LikeButton = ({
    onClick,
    liked,
}: ILikeButton) => {
    return (
        <button onClick={onClick} className={styles.btn}>
            {liked ? <AiFillHeart /> : <AiOutlineHeart/>}
        </button>
    );
};

export default LikeButton;