import React, { useEffect } from 'react'
import './css/Page.css'
import { Link, useParams } from 'react-router-dom'

export const Characters = (state) => {
    const param = useParams()

    useEffect(() => {
        // * When a component loading --> fetch data to redux
        state.getCard('characters', 24, param.pageId - 1)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [param.pageId])

    const partingCards = (arrCards) => {
        // * Decomposed on the shelves
        console.log(arrCards)
        if (arrCards.length > 0) {
            let allCards = arrCards.map((index, key) => (
                <Link
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
                        {index.publisher === null ? (
                            <p>Publisher: Unknow</p>
                        ) : (
                            <p>Publisher: {index.publisher.name}</p>
                        )}
                    </div>
                </Link>
            ))

            return allCards
        } else {
            return <h1>Error</h1>
        }
    }

    const { arr, isFetchCards } = state.charactersCard
    console.log(!!Object.keys(arr).length)
    // if (arr)
    // const arrResults = arr
    if (isFetchCards) {
        return (
            <div>
                <p>Загрузка</p>
            </div>
        )
    } else if (!isFetchCards) {
        if (!!Object.keys(arr).length) {
            return (
                <div>
                    <div>
                        <Link
                            to={
                                '/characters/page=' +
                                (parseInt(param.pageId) - 1)
                            }
                        >
                            <button
                                disabled={param.pageId < 2 ? 'disabled' : ''}
                            >
                                {' '}
                                Туда{' '}
                            </button>
                        </Link>
                        <Link
                            to={
                                '/characters/page=' +
                                (parseInt(param.pageId) + 1)
                            }
                        >
                            <button
                                disabled={
                                    param.pageId <
                                    Math.ceil(
                                        arr.number_of_total_results /
                                            arr.number_of_page_results
                                    )
                                        ? 'disabled'
                                        : ''
                                }
                            >
                                {' '}
                                Сюда{' '}
                            </button>
                        </Link>
                    </div>
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
