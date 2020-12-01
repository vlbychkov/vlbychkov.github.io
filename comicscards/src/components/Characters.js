import React, { useEffect } from 'react'
import './styles/Characters.scss'
import { Link, useParams } from 'react-router-dom'

export const Characters = (state) => {
    const param = useParams()
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [param.pageId])

    const partingCards = (arrCards) => {
        // * Decomposed on the shelves
        if (arrCards.length > 0) {
            let allCards = arrCards.map((index, key) => (
                <Link
                    className="cards"
                    key={key}
                    to={{
                        pathname: '/characters/person/' + index.id,
                        state: { id: index.id },
                    }}
                >
                    <div className="grid-card card">
                        <img
                            src={index.image.original_url}
                            alt={index.name}
                            width="auto"
                            height="256px"
                        />
                        <h1>{index.name}</h1>
                    </div>
                </Link>
            ))

            return allCards
        } else {
            return <h1>Error</h1>
        }
    }

    const { arr, isFetchCards } = state.charactersCard
    if (isFetchCards) {
        return (
            <div>
                <p>Загрузка</p>
            </div>
        )
    } else if (!isFetchCards) {
        if (!!Object.keys(arr).length) {
            return (
                <div className="div--characters">
                    <div className="grid grid-table">
                        {partingCards(arr.results)}
                    </div>
                </div>
            )
        } else {
            return <div>Error</div>
        }
    }
}
