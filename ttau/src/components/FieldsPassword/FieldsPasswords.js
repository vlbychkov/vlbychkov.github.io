import React, { useState } from 'react'
import '../styles/Passwords.scss'

export const FieldsPasswords = (params) => {
    const [password, setPassword] = useState('')
    let refp1 = React.createRef()
    let refp2 = React.createRef()
    let refInput = React.createRef()
    let refInputSecondPassword = React.createRef()

    const checkPasswordInput = (e) => {
        if (e.currentTarget.id === '1') {
            if (e.currentTarget.value === '') {
                refp1.current.textContent = 'Укажите пароль'
                refp1.current.className = 'field-input__p--first--red'
                e.currentTarget.className = 'field-input__first-p-input--red'

                params.correctPassword(false)
            } else if (e.currentTarget.value.length < 5) {
                refp1.current.textContent = 'Используйте не менее 5 символов'
                refp1.current.className = 'field-input__p--first--red'
                e.currentTarget.className = 'field-input__first-p-input--red'

                params.correctPassword(false)
            } else if (
                refInputSecondPassword.current.value !==
                    e.currentTarget.value &&
                refInputSecondPassword.current.value.length > 1
            ) {
                setPassword(e.currentTarget.value)

                refp2.current.textContent = 'Пароли не совпадают'
                refp2.current.className = 'field-input__p--second--red'
                refInputSecondPassword.current.className =
                    'field-input__second-p-input--red'
            } else {
                refp1.current.textContent = ''
                refp1.current.className = 'field-input__p--first--no-red'
                e.currentTarget.className = 'field-input__first-p-input'
                refp2.current.className = 'field-input__p--second--no-red'
                refInputSecondPassword.current.className =
                    'field-input__second-p-input'
                refp2.current.textContent = ''

                setPassword(e.currentTarget.value)
                params.correctPassword(false)
            }
        } else if (e.currentTarget.id === '2') {
            if (e.currentTarget.value === '' && refInput.current.value === '') {
                refp2.current.textContent = 'Укажите пароль'
                refp2.current.className = 'field-input__p--second--red'
                refp1.current.className = 'field-input__p--first--red'
                e.currentTarget.className = 'field-input__first-p-input--red'
                refp1.current.textContent = 'Укажите пароль'
                refInput.current.className = 'field-input__first-p-input--red'

                params.correctPassword(false)
            } else if (e.currentTarget.value === '') {
                refp2.current.textContent = 'Укажите пароль'
                refp2.current.className = 'field-input__p--second--red'
                e.currentTarget.className = 'field-input__second-p-input--red'

                params.correctPassword(false)
            } else if (e.currentTarget.value !== password) {
                refp2.current.textContent = 'Пароли не совпадают'
                refp2.current.className = 'field-input__p--second--red'
                e.currentTarget.className = 'field-input__second-p-input--red'

                params.correctPassword(false)
            } else if (e.currentTarget.value === password) {
                refp2.current.className = 'field-input__p--second--no-red'
                e.currentTarget.className = 'field-input__second-p-input'
                refp2.current.textContent = ''

                params.correctPassword(true, password)
            }
        }
    }

    return (
        <div className="fields-passwords">
            <div className="fields-passwords__first-password-block">
                <h2 className="fields-passwords__h2">Пароль</h2>
                <div className="fields-passwords__field-input field-input">
                    <input
                        className="field-input__first-p-input"
                        type="password"
                        onBlur={checkPasswordInput}
                        onChange={checkPasswordInput}
                        id="1"
                        ref={refInput}
                    />
                    <p
                        className="field-input__p--first--no-red"
                        id="1"
                        ref={refp1}
                    ></p>
                </div>
                <div className="fields-passwords__desc-first">
                    <p>
                        Ваш новый пароль должен содержать не менее 5 символов.
                    </p>
                </div>
            </div>
            <div className="fields-passwords__second-password-block">
                <h2 className="fields-passwords__h2">Пароль еще раз</h2>
                <div className="fields-passwords__field-input field-input">
                    <input
                        className="field-input__second-p-input"
                        type="password"
                        onBlur={checkPasswordInput}
                        onChange={checkPasswordInput}
                        id="2"
                        ref={refInputSecondPassword}
                    />
                    <p
                        className="field-input__p--second--no-red"
                        id="2"
                        ref={refp2}
                    ></p>
                </div>
                <div className="fields-passwords__desc-second">
                    <p>
                        Повторите пароль, пожалуйста, это обезопасит вас с нами
                        на случай ошибки.
                    </p>
                </div>
            </div>
        </div>
    )
}
