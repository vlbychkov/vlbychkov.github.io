import {Link} from 'react-router-dom';
import React, { Component } from 'react'



export default class Nav extends Component {

      panelBtn = () => {
        return (
            <div>
            
              <h1>Main</h1>
              <Link to='/'>
                <button>Home</button>
              </Link>
              <Link to='/characters'>
                <button>Characters</button>
              </Link>
              
              <Link to="/volumes">
                <button>Volumes</button>
              </Link>
              
            </div>
        )
      }
    
    render() {
        return(
            <div>
               <this.panelBtn/>
            </div>
        )
    }
    
}