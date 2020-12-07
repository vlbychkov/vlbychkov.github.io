import React, { Component } from 'react'
import { SelectorCities } from './SelectorCities'
import '../styles/City.scss'

export default class City extends Component {
    render() {
        return (
            <div className="field-city">
                <div className="field-city__div-h2">
                    <h2 className="field-city__h2">Ваш город</h2>
                </div>
                <div className="field-city__selector">
                    <SelectorCities
                        choiceCity={this.props.choiceCity}
                        cities={this.props.cities}
                    />
                </div>
            </div>
        )
    }
}
