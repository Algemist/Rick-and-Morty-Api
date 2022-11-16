import React from 'react';
import {ICharacter} from "../../../../types";
import styles from './characterInfo.module.css';
import LikeButton from "../../../UI/Buttons/LikeButton/LikeButton";
import CloseButton from "../../../UI/Buttons/CloseButton/CloseButton";

interface ICharacterInfo extends Omit<ICharacter, "image" | "episode" | "url"> {
    handleLike: () => void,
    handleDelete: () => void
}

const CharacterInfo = ({
    name,
    type,
    gender,
    origin,
    status,
    location,
    created,
    species,
    liked,
    handleLike,
   handleDelete
}: ICharacterInfo) => {
    const date = new Date(created);
    return (
        <div className={styles.wrapper}>
            <CloseButton onClick={handleDelete}/>
            <LikeButton onClick={handleLike}  liked={liked}/>
            <h2 className={styles.title}>Character info:</h2>
            <p>name: <span>{name}</span></p>
            <p>gender: <span>{gender}</span></p>
            {type.length !== 0 && <p>type: <span>{type}</span></p>}
            <p>species: <span>{species}</span></p>
            <p>status: <span>{status}</span></p>
            <p>created: <span>{date.getDate()}.{date.getMonth()}.{date.getFullYear()}</span></p>
            <p>origin: <span>{origin.name}</span></p>
            <p>location: <span>{location.name}</span></p>
        </div>
    );
};

export default CharacterInfo;