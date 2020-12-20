import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { getData } from '../action/cards'
import { getCharacter } from '../action/character'
import { Card } from './Card'
import { PageCharacters } from './PageCharacters'

import './css/App.css'
import Nav from './Nav'
import Volumes from './Volumes'

class App extends Component {
    constructor() {
        super()
        this.state = {
            countCards: 24,
        }
    }

    render() {
        const {
            getData,
            charactersCard,
            getCharacter,
            charCardPerson,
        } = this.props
        return (
            <Router>
                <Nav />
                <Route exact path="/" />
                <Route exact path={'/characters/person/:id'}>
                    <Card
                        charCardPerson={charCardPerson}
                        getCharacter={getCharacter}
                    />
                </Route>
                <Route exact path="/characters/page=:pageId">
                    <PageCharacters
                        charactersCard={charactersCard}
                        getCard={getData}
                        countOffset={this.state.countCards}
                    />
                </Route>
                <Route exact path="/volumes">
                    <Volumes />
                </Route>
            </Router>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        charactersCard: store.api,
        charCardPerson: store.characterCard,
    }
}

const mapDispatchToProps = (dispatch) => ({
    getData: (choice, count, offset) =>
        dispatch(getData(choice, count, offset)),
    getCharacter: (id) => dispatch(getCharacter(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
