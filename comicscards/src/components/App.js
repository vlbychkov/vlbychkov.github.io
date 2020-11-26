import React, { Component } from 'react'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getData } from '../action/cards';
import { getCharacter } from '../action/character';
import { Card } from './Card';
import Characters from './Characters';

import './css/App.css';
import Nav from './Nav';
import Volumes from './Volumes';

class App extends Component {

  render () {
    
    const { getData, charactersCard, getCharacter, charCardPerson } = this.props
      return(
        <Router>
            <Nav />
            <Route path='/'/>
            <Route exact path={"/characters/:id"} >
              <Card charCardPerson={charCardPerson} getCharacter={getCharacter}/>
            </Route>
            <Route exact path='/characters'>
              <Characters charactersCard={charactersCard} getCard={getData}/>
            </Route>
            <Route path='/volumes'>
              <Volumes/>
            </Route>

          </Router>
      ) 
  }
  
}


const mapStateToProps = store => {
  return {
    charactersCard: store.api,
    charCardPerson: store.characterCard
  }
}

const mapDispatchToProps = dispatch => ({
  getData: (choice, count) => dispatch(getData(choice, count)),
  getCharacter: id => dispatch(getCharacter(id)),
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
