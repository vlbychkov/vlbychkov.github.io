import React, { useState } from 'react'
import City from './Cities/City'

export const FillingForm = (params) => {
    const selectedCity = (value) => {
        setCity(value)
    }

    const mostCityPopul = () => {
        let count = []

        params.city.map((index) => {
            if (count.length === 0) {
                count = index
            } else {
                if (count.population < parseInt(index.population)) {
                    count = index
                }
            }
            return true
        })

        return count.city
    }
    const [city, setCity] = useState(mostCityPopul())

    const falseS = (event) => {
        event.preventDefault()
        if (city === '') {
            setCity(mostCityPopul())
        }
        return false
    }
    return (
        <React.Fragment>
            <form>
                <City choiceCity={selectedCity} cities={params.city} />
                <input type="submit" onClick={falseS} />
            </form>
        </React.Fragment>
    )
}
