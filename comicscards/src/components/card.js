import React, { Component } from 'react'


export default class Card extends Component {

    componentDidMount() {
        
    }
    

    render() {
        console.log(this.props.card.arr[2])
        const { name} = this.props.card.arr[2]
        return(
            <div>
                {/* <img src={img.original_img} alt="test"/> */}
                <h1>{name}</h1>
                {/* <p>{deck}   </p> */}
            </div>
        )
    }
}