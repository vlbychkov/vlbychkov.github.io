import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import './css/card.css'

export const Card = (state) => {
    const [step] = useState(0)
    const match = useRouteMatch()

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
            return (
                <div className="cardPerson">
                    <div>
                        <img
                            src={personPage.image.original_url}
                            alt={personPage.name}
                            height="400px"
                            width="auto"
                        />
                    </div>
                    <div>
                        <h1>{personPage.name}</h1>
                        <h2>{personPage.real_name}</h2>
                        {personPage.birth === null ? (
                            <p>Birth: Unknow</p>
                        ) : (
                            <p>Birth: {personPage.birth}</p>
                        )}
                        {personPage.deck === null ? (
                            <p>Description: Unknow</p>
                        ) : (
                            <p>Description: {personPage.deck}</p>
                        )}
                    </div>
                    <div>
                        {personPage.origin === null ||
                        personPage.origin.name === null ? (
                            <p>Race: Unknow</p>
                        ) : (
                            <p>Race: {personPage.origin.name}</p>
                        )}
                        {personPage.publisher.name === null ? (
                            <p>Publisher: Unknow</p>
                        ) : (
                            <p>Publisher: {personPage.publisher.name}</p>
                        )}
                    </div>
                </div>
            )
        }
    }
}
