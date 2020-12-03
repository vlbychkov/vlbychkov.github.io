import React, { useEffect, useState } from 'react'
import { Characters } from './Characters'
import './styles/pageC.scss'
import { Link, useParams } from 'react-router-dom'

export const PageCharacters = (params) => {
    const [countCardsOfPage, setCountCardsOfPage] = useState(24)
    const param = useParams()

    useEffect(() => {
        params.getCard('characters', countCardsOfPage, param.pageId - 1)
        console.log(param.pageId, countCardsOfPage)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countCardsOfPage, param.pageId])

    const btnCountCards = () => {
        return (
            <div className="btnOffset">
                <button
                    className="btn btnOffset__btn12"
                    onClick={() => {
                        setCountCardsOfPage(
                            countCardsOfPage - countCardsOfPage + 12
                        )
                    }}
                >
                    12
                </button>

                <button
                    className="btn btnOffset__btn24"
                    onClick={() => {
                        setCountCardsOfPage(
                            countCardsOfPage - countCardsOfPage + 24
                        )
                    }}
                >
                    24
                </button>

                <button
                    className="btn btnOffset__btn48"
                    onClick={() => {
                        setCountCardsOfPage(
                            countCardsOfPage - countCardsOfPage + 48
                        )
                    }}
                >
                    48
                </button>

                <button
                    className="btn btnOffset__btn64"
                    onClick={() => {
                        setCountCardsOfPage(
                            countCardsOfPage - countCardsOfPage + 64
                        )
                    }}
                >
                    64
                </button>

                <button
                    className="btn btnOffset__btn96"
                    onClick={() => {
                        setCountCardsOfPage(
                            countCardsOfPage - countCardsOfPage + 96
                        )
                    }}
                >
                    96
                </button>
            </div>
        )
    }

    const btnPagination = () => {
        const { arr, isFetchCards } = params.charactersCard

        if (isFetchCards) {
            return (
                <div className="div--characters">
                    <div className="div div__div">
                        <button className="btn div__btn" disabled>
                            Туда
                        </button>

                        <button className="btn div__btn" disabled>
                            Сюда
                        </button>
                    </div>
                </div>
            )
        } else if (!isFetchCards) {
            if (!!Object.keys(arr).length) {
                return (
                    <div className="div--characters">
                        <div className="div div__div">
                            <Link
                                to={
                                    '/characters/page=' +
                                    (parseInt(param.pageId) - 1)
                                }
                            >
                                <button
                                    className="btn div__btn"
                                    disabled={
                                        param.pageId < 2 ? 'disabled' : ''
                                    }
                                >
                                    {' '}
                                    Туда{' '}
                                </button>
                            </Link>
                            <p>
                                {param.pageId}-я страница / Всего карточек:{' '}
                                {arr.number_of_total_results} / Всего страниц:{' '}
                                {Math.ceil(
                                    arr.number_of_total_results / arr.limit
                                )}
                            </p>
                            <Link
                                to={
                                    '/characters/page=' +
                                    (parseInt(param.pageId) + 1)
                                }
                            >
                                <button
                                    className="btn div__btn"
                                    disabled={
                                        param.pageId <
                                        Math.ceil(
                                            arr.number_of_total_results /
                                                arr.limit
                                        )
                                            ? ''
                                            : 'disabled'
                                    }
                                >
                                    {' '}
                                    Сюда{' '}
                                </button>
                            </Link>
                        </div>
                    </div>
                )
            }
        }
    }

    return (
        <div className="div pageCharacter">
            <div className="filter pageCharacter__filter">
                <div className="block filter__block">
                    <h1>Фильтр</h1>
                    <h4>Сколько карточек на странице будет</h4>
                    {btnCountCards()}
                </div>
            </div>
            <div className="div pageCharacter__cards">
                {btnPagination()}
                <Characters
                    charactersCard={params.charactersCard}
                    getCard={params.getCard}
                    countOffset={1}
                />
            </div>
        </div>
    )
}
