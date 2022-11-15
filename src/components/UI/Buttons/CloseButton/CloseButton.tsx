import React from 'react';
import {ImCross} from 'react-icons/im';
import styles from "./closeButton.module.css";

interface ICloseButton {
    onClick: () => void
}

const CloseButton = ({onClick}: ICloseButton) => {
    return (
        <button onClick={onClick} className={styles.btn}>
            <ImCross />
        </button>
    );
};

export default CloseButton;