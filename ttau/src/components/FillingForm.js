import React, { useState } from 'react'
import City from './Cities/City'
import { FieldsPasswords } from './FieldsPassword/FieldsPasswords'
import { FieldEmail } from './FieldEmail/FieldEmail'

export const FillingForm = (params) => {
    const dateObject = new Date(params.user.user.last_save)
    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октабря',
        'ноября',
        'декабря',
    ]
    const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15
    console.log(humanDateFormat)
    let formatted_date =
        dateObject.toLocaleString('ru', { day: 'numeric' }) +
        ' ' +
        months[dateObject.toLocaleString('ru', { month: 'numeric' }) - 1] +
        ' ' +
        dateObject.toLocaleString('ru', { year: 'numeric' }) +
        ' в ' +
        (dateObject.toLocaleString('ru', { hour: 'numeric' }) - 4) +
        ':' +
        dateObject.toLocaleString('ru', { minute: 'numeric' }) +
        ':' +
        dateObject.toLocaleString('ru', { second: 'numeric' })

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
            user: {
                user_number: params.user.user.name,
                user_city: city,
                user_password: password,
                user_email: email,
            },
        })
        let current_datetime = new Date()
        formatted_date =
            current_datetime.getDate() +
            ' ' +
            months[current_datetime.getMonth()] +
            ' ' +
            current_datetime.getFullYear() +
            ' в ' +
            current_datetime.getHours() +
            ':' +
            current_datetime.getMinutes() +
            ':' +
            current_datetime.getSeconds()
        return false
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
                <div>
                    <input
                        type="submit"
                        onClick={sendForm}
                        disabled={validateBtn(
                            unCorrectPassword,
                            unCorrectEmail
                        )}
                    />
                    <p>Последние изменения {formatted_date}</p>
                </div>
            </form>
        </React.Fragment>
    )
}
