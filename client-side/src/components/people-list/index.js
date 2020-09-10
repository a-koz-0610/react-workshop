import React from 'react';
import PersonTile from '../person-tile';
import style from './style.module.scss';

const PeopleList = ({ people }) => (
    <div className={style.people__container}>
        {people.map(person => {
            return (
                <PersonTile person={person} key={person.url} />
            )
        })}
    </div>
)

export default PeopleList;
