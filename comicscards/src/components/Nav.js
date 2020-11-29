import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import './styles/nav.scss'

export default class Nav extends Component {
    panelBtn = () => {
        return (
            <div className="nav">
                <h1 className="h1 nav__h1">Comics Cards</h1>
                <div className="div nav__div">
                    <Link to="/">
                        <button className="btn nav__btn">Home</button>
                    </Link>
                    <Link to="/characters/page=1">
                        <button className="btn nav__btn">Characters</button>
                    </Link>

                    <Link to="/volumes">
                        <button className="btn nav__btn">Volumes</button>
                    </Link>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <this.panelBtn />
            </div>
        )
    }
}
