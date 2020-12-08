import React, { useState } from 'react'

export const BtnSendForm = (params) => {
    const parseDateSave = () => {
        const dateObject = new Date(params.lastSave)
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

        return formatted_date
    }

    const sendForm = (event) => {
        event.preventDefault()
        setLastSaveDate(Date.now())
        console.log({
            user: {
                user_id: params.user,
                user_city: params.city,
                user_password: params.password,
                user_email: params.email,
                last_save: Date.now(),
            },
        })

        return false
    }

    const [lastSaveDate, setLastSaveDate] = useState(parseDateSave)
    return (
        <div>
            <input
                type="submit"
                disabled={params.disabledBtn}
                onClick={sendForm}
            />
            <p>Последние изменения {lastSaveDate}</p>
        </div>
    )
}
