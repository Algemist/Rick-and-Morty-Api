import React from 'react';
import styles from './header.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {switchStatus} from "../../store/LikedCharacters/likedCharactersSlice";
const Header = () => {
    const status = useAppSelector(state => state.likedCharacters.status);
    const dispatch = useAppDispatch();
    const handleChange = () => {
        dispatch(switchStatus(!status));
    }

    return (
        <header>
            <div className={styles.container}>
                <label htmlFor="liked">Liked characters</label>
                <input type="checkbox" id="liked" checked={status} onChange={handleChange}/>
            </div>
        </header>
    );
};

export default Header;