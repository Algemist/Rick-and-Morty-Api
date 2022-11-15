import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchCharacters} from "../../store/AsynCharacters/AsyncCharactersSlice";
import styles from './main.module.css';
import CharactersList from "../CharactersList/CharactersList";

const Main = () => {
    const dispatch = useAppDispatch();
    const {status, error, characters: allCharacters} = useAppSelector(state => state.characters);
    const {characters: likedCharacters} = useAppSelector(state => state.likedCharacters);
    const likesStatus = useAppSelector(state => state.likedCharacters.status);

    useEffect(() => {
        dispatch(fetchCharacters());
    }, []);

    return (
        <main>
            <div className={styles.container}>
                {status === 'loading' && <h2>Loading...</h2>}
                {status === 'error' && <h2>{error}</h2>}
                <CharactersList characters={likesStatus ? likedCharacters: allCharacters}/>
            </div>
        </main>
    );
};

export default Main;