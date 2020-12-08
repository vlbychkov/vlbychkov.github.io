import React, { useState } from 'react'
import City from './Cities/City'
import { FieldsPasswords } from './FieldsPassword/FieldsPasswords'
import { FieldEmail } from './FieldEmail/FieldEmail'
import { BtnSendForm } from './btnSendForm/btnSendForm'

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

    const correctPassword = (booleanAnswer, password) => {
        setUnCorrectPassword(!booleanAnswer)
        if (booleanAnswer) {
            setPassword(password)
            return !booleanAnswer
        } else {
            return booleanAnswer
        }
    }

    const correctEmail = (booleanAnswer, email) => {
        setUnCorrectEmail(!booleanAnswer)
        if (booleanAnswer) {
            setEmail(email)
            return !booleanAnswer
        } else {
            return booleanAnswer
        }
    }

    const [city, setCity] = useState(mostCityPopul())
    console.log(city)
    const [unCorrectPassword, setUnCorrectPassword] = useState(true)
    const [unCorrectEmail, setUnCorrectEmail] = useState(true)
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const validateBtn = (checkPassword, checkEmail) => {
        if (!checkPassword && !checkEmail) {
            return ''
        } else {
            return 'disabled'
        }
    }
    return (
        <React.Fragment>
            <form>
                <City choiceCity={selectedCity} cities={params.city} />
                <hr />
                <FieldsPasswords correctPassword={correctPassword} />
                <hr />
                <FieldEmail correctEmail={correctEmail} />
                <React.Fragment>
                    <BtnSendForm
                        user={params.user.user.name}
                        city={city}
                        password={password}
                        email={email}
                        disabledBtn={validateBtn(
                            unCorrectPassword,
                            unCorrectEmail
                        )}
                        lastSave={params.user.user.last_save}
                    />
                </React.Fragment>
            </form>
        </React.Fragment>
    )
}
