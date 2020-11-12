import React, { Component } from 'react'

export default class AllValute extends Component {
    constructor() {
        super();
        this.state = {
            dataValute: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        const axios = require('axios');
        axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
        .then(response => {
            this.setState({
                dataValute: response.data["Valute"],
                isLoaded: true,
            })
        })
        
    }
    

    render() {
        const { dataValute, isLoaded } = this.state;
        if (isLoaded) {
            let arrValuteName = Object.keys(dataValute);
            let arrText = [];
            for (let i = 0; i < Object.keys(dataValute).length; i++) {
                arrText.push(dataValute[arrValuteName[i]]["CharCode"] + " - " + parseFloat(dataValute[arrValuteName[i]]["Value"]).toFixed(2)
                 + " руб за " +dataValute[arrValuteName[i]]["Nominal"] +" "+dataValute[arrValuteName[i]]["Name"])
                
            }
            let test = arrText.map((index, key) =>
            <p key={key}>{index}</p>)
            
            
            return(
                <div className="div-main">
                    <div className="div--main">
                        {test}
                    </div>
                   
                </div>
            )
        } else {
            return (<div></div>)
        }
        
        
    }
}