import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import React, { Component } from 'react'
import Characters from './Characters';
import Volumes from './Volumes'



export default class Nav extends Component {

    
      panelBtn = () => {
        return (
            <div>
            
              <h1>Main</h1>
              <Link to='/characters'>
                <button onClick={this.onBtnClick}>Characters</button>
              </Link>
              <Link to="/volumes">
                <button onClick={this.onBtnClick}>Volumes</button>
              </Link>
              
            </div>
        )
      }
    
    render() {
        const { char, data } = this.props
        // console.log(this.props)
        return(
            <div>
                <Router>
                    <Route path='/' render={() => <this.panelBtn/>} />

                    <div className="App">
                <Route path='/characters' render={() => 
                    <div>
                        <Link to="/">
                            <button onClick={this.onBtnClick}>Main</button>
                        </Link>
                        <Characters charactersCard={char} getCard={data}/>
                    </div>} />

                    <Route path='/volumes' render={() => 
                    <div>
                        <Link to="/">
                            <button onClick={this.onBtnClick}>Main</button>
                        </Link>
                        <Volumes/>
                    </div>} />
                    </div>
                </Router>
          
        </div>
        )
    }
    
}