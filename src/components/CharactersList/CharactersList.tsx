import React from 'react';
import styles from './charactersList.module.css';
import {ICharacter} from "../../types";
import CharacterItem from "./CharacterItem/CharacterItem";

interface ICharactersList {
    characters: ICharacter[]
}

const CharactersList = ({characters}: ICharactersList) => {
    return (
        <ul className={styles.list}>
            {characters.map(character => <CharacterItem {...character} key={character.id} />)}
        </ul>
    );
};

export default CharactersList;