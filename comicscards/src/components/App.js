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

    if (charactersCard.arr.length > 0) {
      return(
        <div>
          <Router>

            
          <Nav />
          <Route path='/'/>
          <Route exact path='/characters' render={() => <Characters charactersCard={charactersCard} getCard={getData}/>} />
          <Route path='/volumes' render={() => <Volumes/>} />
          <Route path={"/characters/:id"} render={() => <Card card={charactersCard}/>}/>

          </Router>
        </div>
       
      )
    } else {
      return(
        <Router>

            
          {/* <Route path={"/characters/:id"} render={() => <Card/>}/> */}
          <Nav />
          <Route path='/'/>
          <Route path='/characters' render={() => <Characters charactersCard={charactersCard} getCard={getData}/>} />
          <Route path='/volumes' render={() => <Volumes/>} />
        </Router>
      )
    }
   
    
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
