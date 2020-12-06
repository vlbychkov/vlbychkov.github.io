import React from 'react'
import '../styles/Email.scss'

export const FieldEmail = (params) => {
    let refPEmail = React.createRef()
    let refInputEmail = React.createRef()
    const readingEmail = (e) => {
        if (e.currentTarget.value === '') {
            refPEmail.current.textContent = 'Укажите E-mail'
            refPEmail.current.className = 'block-input__p-email--red'
            refInputEmail.current.className = 'block-input__input-email--red'

            params.correctEmail(false)
        } else if (validateEmail(e.currentTarget.value) === false) {
            refPEmail.current.textContent = 'Неверный E-mail'
            refPEmail.current.className = 'block-input__p-email--red'
            refInputEmail.current.className = 'block-input__input-email--red'

            params.correctEmail(false)
        } else {
            refPEmail.current.textContent = ''
            refPEmail.current.className = 'block-input__p-email'
            refInputEmail.current.className = 'block-input__input-email'

            params.correctEmail(true, e.currentTarget.value)
        }
    }

    function validateEmail(email) {
        const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
    }
    return (
        <div className="card-email">
            <h2 className="card-email__h2">Электронная почта</h2>
            <div className="card-email__block-input block-input">
                <input
                    className="block-input__input-email"
                    type="email"
                    onChange={readingEmail}
                    onBlur={readingEmail}
                    ref={refInputEmail}
                />
                <p ref={refPEmail} className="block-input__p-email"></p>
            </div>
            <div className="card-email__block-p">
                <p>Можно изменить адрес, указанный при регистрации. </p>
            </div>
        </div>
    )
}
