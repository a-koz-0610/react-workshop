import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import style from './style.module.scss';
import LoadingIndicatorSpinner from '../../components/loading';
import PeopleList from '../../components/people-list';

const StarWarsPeoplePage = () => {

    const starWarsPeopleUrl = `https://swapi.py4e.com/api/people/`,
        [people, setPeople] = useState(null),
        [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios(starWarsPeopleUrl);
            setPeople(result.data.results);
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }
        fetchData();
        // eslint-disable-next-line
    }, [])

    return (
        <div className={style.starWarsPeople__container}>
            <h1>Star Wars People</h1>
            {isLoading ? <LoadingIndicatorSpinner /> :
                <PeopleList people={people} />
            }
        </div>

    )
}

export default StarWarsPeoplePage;