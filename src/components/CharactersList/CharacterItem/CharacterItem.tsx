import React from 'react';
import {ICharacter} from "../../../types";
import styles from './characterItem.module.css';
import CharacterInfo from "./CharacterInfo/CharacterInfo";

const CharacterItem = ({
    name,
    image,
    type,
    gender,
    origin,
    status,
    location,
    created,
    species,
    id
}: ICharacter) => {
    return (
        <li className={styles.item}>

            <img src={image} alt={name} width={300} height={300} className={styles.img}/>
            <CharacterInfo
                id={id}
                type={type}
                status={status}
                name={name}
                created={created}
                gender={gender}
                location={location}
                origin={origin}
                species={species}
            />
        </li>
    );
};

export default CharacterItem;