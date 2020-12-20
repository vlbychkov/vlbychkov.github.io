import React, { Component } from 'react'
import { User } from './User'

export default class UserPage extends Component {
    render() {
        return (
            <div className="card-user">
                <User user={this.props.user.user} />
            </div>
        )
    }
}
