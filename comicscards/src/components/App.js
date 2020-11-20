import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getData } from '../action/cards';

import './css/App.css';
import Nav from './Nav';

class App extends Component {



  render () {
    const { getData } = this.props
    console.log(this.props)
    return(
      <Nav data={getData} selectCharacters={this.props.selectCharacters} char={this.props.charactersCard}/>
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
