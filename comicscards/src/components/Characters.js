import React, { Component } from 'react'
import "./css/Page.css"
import { BrowserRouter as Link } from "react-router-dom";


class Characters extends Component {
    
    componentDidMount() {
        // * When a component loading --> fetch data to redux
        this.props.getCard("characters", 100)
    }
    
    onBtnClock = () => {
        // * If find a problem to first variant
        this.props.getCard("Characters")
    }

    partingCards = (arrCards) => {
        // * Decomposed on the shelves

        arrCards = arrCards.arr
        let allCards = arrCards.map((index, key) => 

            <Link key={key} to={"/characters/"+index.id}>
                <div className="grid-card card">
                    <img src={index.image.original_url} alt={index.name} width="auto" height="256px"/>
                    <h1>{index.name}</h1>
                    <p>{index.publisher.name}</p>

                </div>
            </Link>)

        return allCards
    }

    render() {
        
        console.log(this.props)
        const { arr, isFetch} = this.props.charactersCard
        if (isFetch) {
            return (
                <div>
                    <p>Загрузка</p>
            </div>
            )
        } else if(!isFetch) {
            
            if (arr.length > 0) {
                
                return (
                        <div className="grid grid-table">
                            <this.partingCards arr={arr}/>
                        </div>
                    
                )
            } if (arr.length === 0) {
                return(
                    <div>
                        <h1>Что-то пошло не так, нажмите на кнопку</h1>
                        <button onClick={this.onBtnClock}>Загрузить</button>
                    </div>
                )
            }
            
        }
        
        
        
        
    }
}

export default Characters;