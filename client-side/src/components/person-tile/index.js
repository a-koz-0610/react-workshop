import React from 'react';
import style from './style.module.scss';

const PersonTile = ({ person }) => {
    return (
        <div className={style.person__container}>
            <h4>{person.name}</h4>
            <p>{person.eye_color}</p>
            <p>{person.birth_year}</p>
        </div>
    )
}
export default PersonTile;
