import React, { Component } from 'react'


export default class Card extends Component {

    componentDidMount() {
        
    }
    

    render() {
        // console.log(this.props.card.arr[2])
        const { name} = this.props.card.arr[2]
        return(
            <div>
                <h1>{name}</h1>
            </div>
        )
    }
}