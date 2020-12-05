import React, { useState } from 'react'
import City from './Cities/City'
import { FieldsPasswords } from './FieldsPassword/FieldsPasswords'
import { FieldEmail } from './FieldEmail/FieldEmail'

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
    const sendForm = (event) => {
        event.preventDefault()
        if (city === '') {
            setCity(mostCityPopul())
        }
        console.log({
            number_user: params.user.user.name,
            city: city,
            password: password,
        })
        return false
    }

    const correctPassword = (booleanAnswer, password) => {
        setUnCorrectPassword(!booleanAnswer)
        if (booleanAnswer) {
            setPassword(password)
        }
    }

    const [city, setCity] = useState(mostCityPopul())
    const [unCorrectPassword, setUnCorrectPassword] = useState(true)
    const [unCorrectEmail, setUnCorrectEmail] = useState(true)
    const [password, setPassword] = useState('')

    const validateBtn = (checkPassword, checkEmail) => {
        console.log(checkPassword, checkEmail)
        return 'disabled'
    }
    return (
        <React.Fragment>
            <form>
                <City choiceCity={selectedCity} cities={params.city} />
                <hr />
                <FieldsPasswords correctPassword={correctPassword} />
                <hr />
                <FieldEmail />
                <input
                    type="submit"
                    onClick={sendForm}
                    disabled={validateBtn(unCorrectPassword, unCorrectEmail)}
                />
            </form>
        </React.Fragment>
    )
}
