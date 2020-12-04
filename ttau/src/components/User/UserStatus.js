import React from 'react'
import '../styles/status.scss'

export const UserStatus = (params) => {
    return (
        <div className="status">
            <div className="status__block">
                <div className="status__block_up"></div>
                <p className="status__status_text">{params.status}</p>
            </div>
        </div>
    )
}
