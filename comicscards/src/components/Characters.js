import React, { Component } from 'react'
import "./css/Page.css"
import {Link } from "react-router-dom";


class Characters extends Component {
    
    componentDidMount() {
        const { arr } = this.props.charactersCard
        // * When a component loading --> fetch data to redux
        

            this.props.getCard("characters", 24)

    }
    
    onBtnClock = () => {
        // * If find a problem to first variant
        this.props.getCard("сharacters", 1)
    }

    partingCards = (arrCards) => {
        // * Decomposed on the shelves
        if (arrCards.arr.length > 0) {

            arrCards = arrCards.arr
            let allCards = arrCards.map((index, key) => 
            
            <Link key={key} to={{pathname: "/characters/"+index.id, state: { id:index.id }}}>
                <div className="grid-card card">
                    <img src={index.image.original_url} alt={index.name} width="auto" height="256px"/>
                    <h1>{index.name}</h1>
                    <p>{index.publisher.name}</p>
                </div>
            </Link>)
            
        return allCards
        } else {
            // console.log(arrCards)
            return <h1>Error</h1>
        }
    }

    render() {
        const { arr, isFetchCards} = this.props.charactersCard
        console.log(this.props.charactersCard)
        if (isFetchCards) {
            return (
                <div>
                    <p>Загрузка</p>
            </div>
            )
        } else if(!isFetchCards) {
            
            if (arr.length < 1 || arr === undefined) {
                return(
                    <div>
                        <h1>Что-то пошло не так, нажмите на кнопку</h1>
                        <button onClick={this.onBtnClock}>Загрузить</button>
                    </div>
                )
            }
            else if (arr.length > 0) {
                
                return (
                        <div className="grid grid-table">
                            <this.partingCards arr={arr}/>
                        </div>
                )
            } else {
                return (
                    <div>Error</div>
                )
            }
            
        }
        
        
        
        
    }
}

export default Characters;