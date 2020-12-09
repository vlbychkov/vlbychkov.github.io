import React, { useState } from 'react'
import '../styles/User.scss'
import { UserStatus } from './UserStatus'

export const User = (user) => {
    let ref = React.createRef()
    const [changeStatusChoice, setChangeStatusChoice] = useState(false)
    const [disable, setDisable] = useState('')
    const [Status, setStatus] = useState(user.user.status)
    const [temporaryStatus, setTemporaryStatus] = useState(user.user.status)
    const User = user.user.name

    const choiceChangeStatus = () => {
        if (!changeStatusChoice) {
            return <UserStatus status={Status} />
        } else {
            return inpChangeStatusUser(Status)
        }
    }

    const disabledDefinition = (e) => {
        if (e.length <= 46) {
            setDisable('')
        } else if (e.length > 46) {
            setDisable('disabled')
        }
    }

    const inpChangeStatusUser = (status) => {
        return (
            <div className="status">
                <div className="status__block--inputStatus">
                    <div className="status__block_up--inputStatus"></div>
                    <input
                        className="status__inp_status_user"
                        type="text"
                        maxLength="46"
                        name="status"
                        placeholder="Введите свой новый статус"
                        ref={ref}
                        onChange={() => {
                            setTemporaryStatus(ref.current.value)
                            disabledDefinition(ref.current.value)
                        }}
                        value={temporaryStatus}
                    />
                    <div className="status__panel_btn">
                        <button
                            className="status__btn_status status__btn_status--save"
                            onClick={() => {
                                setChangeStatusChoice(false)
                                setStatus(ref.current.value)
                                console.log({
                                    type: 'CHANGE_STATUS',
                                    user: {
                                        user_number: User,
                                        new_status: ref.current.value,
                                    },
                                })
                            }}
                            disabled={disable}
                        >
                            Изменить
                        </button>
                        <button
                            onClick={() => {
                                setTemporaryStatus(Status)
                                setChangeStatusChoice(false)
                            }}
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
        <React.Fragment>
            <div className="User">
                <div className="name-user">
                    <div>
                        <p className="name-user__user">
                            <span className="name-user__span">
                                Здравствуйте,
                            </span>{' '}
                            Человек №{User}
                        </p>
                    </div>
                    <div className="name-user__btnChangeStatus">
                        <p
                            className="name-user__changeStatus"
                            onClick={() => setChangeStatusChoice(true)}
                        >
                            Сменить статус
                        </p>
                        <div className="name-user__line"></div>
                    </div>
                </div>
            </div>
            {choiceChangeStatus()}
        </React.Fragment>
    )
}
