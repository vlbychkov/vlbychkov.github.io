import React, { useState, useEffect } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
// import { Redirect } from 'react-router'


export const Card = (state) => {
    const [step] = useState(0);
    const match = useRouteMatch();


    const { person, isFetchPerson } = state.charCardPerson
    const { getCharacter } = state

    useEffect(() => {
        getCharacter(match.params.id)
    }, [step]) // eslint-disable-line react-hooks/exhaustive-deps

    
    if (isFetchPerson) {
        return (
            <div>
                <h1>Ожидайте, подгрузка-отгрузка...</h1>
            </div>
        )
    } else if (!isFetchPerson) {
        const personPage = person[0]
        if (personPage === undefined) {
            return (
                <div>
                    <h1>Ожидайте, подгрузка-отгрузка...</h1>
                </div>
            )
        } else {
            return(
                <div>
                    <h1>{personPage.name}</h1>
                    <h3>{personPage.real_name}</h3>
                    {personPage.birth===null ? <p>Birth: Unknow</p> :  <p>Birth: {personPage.birth}</p>} 
                </div>
                )
        }
        
        }
}