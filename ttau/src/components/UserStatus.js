import React, { useEffect } from 'react'
import '../styles/status.scss'

export const UserStatus = (params) => {
    useEffect(() => {
        console.log(params.status)
    }, [params])

    return (
        <div className="status">
            <div className="status__block">
                <div className="status__block_up"></div>
                <p className="status__status_text">{params.status}</p>
            </div>
        </div>
    )
}
