import React, { useState } from 'react'
import '../styles/BlockSendForm.scss'

export const BtnSendForm = (params) => {
    const formattingDate = (date) => {
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
        return (
            date.toLocaleString('ru', { day: 'numeric' }) +
            ' ' +
            months[date.toLocaleString('ru', { month: 'numeric' }) - 1] +
            ' ' +
            date.toLocaleString('ru', { year: 'numeric' }) +
            ' в ' +
            (date.toLocaleString('ru', { hour: 'numeric' }) - 4) +
            ':' +
            date.toLocaleString('ru', { minute: 'numeric' }) +
            ':' +
            (parseInt(
                date.toLocaleString('ru', { second: 'numeric' }).length < 2
            )
                ? '0' + date.toLocaleString('ru', { second: 'numeric' })
                : date.toLocaleString('ru', { second: 'numeric' }))
        )
    }

    const parseDateSave = (check) => {
        if (check === 'default') {
            const dateObject = new Date(params.lastSave)

            return formattingDate(dateObject)
        } else if (check === 'update') {
            const dateObject = new Date(Date.now())

            return formattingDate(dateObject)
        }
    }

    const sendForm = (event) => {
        event.preventDefault()
        setLastSaveDate(parseDateSave('update'))
        console.log({
            type: 'CHANGE_INFO_USER',
            user: {
                user_id: params.user,
                user_city: params.city,
                user_password: params.password,
                user_email: params.email,
                last_save: Date.now(),
                checked_info_email: params.checkedInfoEmail,
            },
        })

        return false
    }

    const [lastSaveDate, setLastSaveDate] = useState(parseDateSave('default'))
    return (
        <div className="block-send-form">
            <div></div>
            <input
                className="block-send-form__input-btn-send"
                type="submit"
                disabled={params.disabledBtn}
                onClick={sendForm}
                value="Изменить"
            />
            <p className="block-send-form__p-date-last-save">
                Последние изменения {lastSaveDate}
            </p>
        </div>
    )
}
