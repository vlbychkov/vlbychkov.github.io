import React, { useState } from 'react'
import '../styles/User.scss'
import { UserStatus } from './UserStatus'

export const User = () => {
    let ref = React.createRef()
    const [changeStatusChoice, setChangeStatusChoice] = useState(false)
    const [disable, setDisable] = useState('')
    const [Status, setStatus] = useState('Прежде, чем действовать, надо понять')
    const User = 'Человек №3596941'

    const choiceChangeStatus = () => {
        if (!changeStatusChoice) {
            return <UserStatus status={Status} />
        } else {
            return inpChangeStatusUser()
        }
    }

    const disabledDefinition = (e) => {
        if (e.length <= 46) {
            setDisable('')
        } else if (e.length > 46) {
            setDisable('disabled')
        }
    }

    const inpChangeStatusUser = () => {
        return (
            <div className="status">
                <div className="status__block--inputStatus">
                    <div className="status__block_up--inputStatus"></div>
                    <input
                        className="status__inp_status_user"
                        type="text"
                        maxLength="46"
                        placeholder="Введите свой новый статус"
                        ref={ref}
                        onChange={() => disabledDefinition(ref.current.value)}
                    ></input>
                    <div className="status__panel_btn">
                        <button
                            className="status__btn_status status__btn_status--save"
                            onClick={() => {
                                setStatus(ref.current.value)
                                setChangeStatusChoice(false)
                            }}
                            disabled={disable}
                        >
                            Изменить
                        </button>
                        <button
                            onClick={() => setChangeStatusChoice(false)}
                            className="status__btn_status status__btn_status--cancel"
                        >
                            Отменить
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="User">
                <div className="cardUser">
                    <div>
                        <p className="cardUser__user">
                            <span className="cardUser__span">
                                Здравствуйте,
                            </span>{' '}
                            {User}
                        </p>
                    </div>
                    <div className="cardUser__btnChangeStatus">
                        <p
                            className="cardUser__changeStatus"
                            onClick={() => setChangeStatusChoice(true)}
                        >
                            Сменить статус
                        </p>
                        <div className="cardUser__line"></div>
                    </div>
                </div>
            </div>
            {choiceChangeStatus()}
        </div>
    )
}
