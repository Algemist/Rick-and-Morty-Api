import React from 'react';
import {ICharacter} from "../../../types";
import styles from './characterItem.module.css';
import CharacterInfo from "./CharacterInfo/CharacterInfo";
import {useAppDispatch} from "../../../hooks/redux";
import {addCharacter, removeFromLikedArr} from "../../../store/LikedCharacters/likedCharactersSlice";
import {changeLikeStatus, removeCharacter} from "../../../store/AsynCharacters/AsyncCharactersSlice";

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
    id,
    liked
}: ICharacter) => {
    const dispatch = useAppDispatch();
    const handleLike = () => {
        if (liked) {
            dispatch(changeLikeStatus({id}));
            dispatch(removeFromLikedArr({id}));
        } else {
            dispatch(changeLikeStatus({id}));
            dispatch(addCharacter({
                name,
                image,
                type,
                gender,
                origin,
                status,
                location,
                created,
                species,
                id,
                liked: !liked
            }));
        }
    }

    const handleDelete = () => {
        dispatch(removeFromLikedArr({id}))
        dispatch(removeCharacter({id}));
    }

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
                liked={liked}
                handleLike={handleLike}
                handleDelete={handleDelete}
            />
        </li>
    );
};

export default CharacterItem;