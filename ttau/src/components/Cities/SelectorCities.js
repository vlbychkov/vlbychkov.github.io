import React from 'react'

export const SelectorCities = (params) => {
    let count = []
    let arrCitiesBig = []
    let normalListCities = []

    params.cities.map((index) => {
        if (parseInt(index.population) > 50000) {
            arrCitiesBig.push(index)
            if (count.length === 0) {
                count = index
            } else {
                if (count.population < parseInt(index.population)) {
                    count = index
                }
            }
        }
        return true
    })

    normalListCities.push(count.city)
    arrCitiesBig.map((index) => {
        if (index.city === normalListCities[0]) {
        } else {
            normalListCities.push(index.city)
        }
        return true
    })

    let optionCities = normalListCities.map((index, key) => {
        return (
            <option key={key} value={index}>
                {index}
            </option>
        )
    })

    const changeOption = (e) => {
        params.choiceCity(e.currentTarget.value)
    }

    return (
        <div>
            <select onChange={changeOption} className="field-city__select">
                {optionCities}
            </select>
        </div>
    )
}
