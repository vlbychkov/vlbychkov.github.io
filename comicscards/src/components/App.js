import React, { Component } from 'react'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getData } from '../action/cards';
import Card from './card';
import Characters from './Characters';

import './css/App.css';
import Nav from './Nav';
import Volumes from './Volumes';

class App extends Component {

  render () {
    const { getData, charactersCard } = this.props
      return(
        <Router>
            <Nav />
            <Route path='/'/>
            <Route exact path={"/characters/:id"} >
              <Card card={charactersCard}/>
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
  }
}

const mapDispatchToProps = dispatch => ({
  getData: (choice, count) => dispatch(getData(choice, count)),
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
