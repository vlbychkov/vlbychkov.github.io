import { Component } from 'react'

export default class CalcForm extends Component {
    constructor() {
        super();
        this.state = {
            dataValute: [],
            isLoaded: false,
            changeUserValute: "AUD",
            result: ""
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
            
            console.log(this.state.dataValute["AUD"])
        }) 
    }

    
    changeValute(e) {

        this.setState({
            changeUserValute: e,
            result: ""
        })
    }


    clg(e) {
        const { changeUserValute, dataValute } = this.state;
        
        if (e.replace(/[e]/g, '') === "") {
            this.setState({
                result: "Вводите цифры"
            })
        } else if (/[0-9]/g.test(e)) {
            this.setState({
                result: (e * dataValute[changeUserValute]["Value"]).toFixed(2) + " руб."
            })
        }
        
        
    }


    render() {
        let arrValuteName = Object.keys(this.state.dataValute);
        let arrText = [];

        for (let i = 0; i < Object.keys(this.state.dataValute).length; i++) {
            arrText.push(this.state.dataValute[arrValuteName[i]]["CharCode"])
            
        }

        let test = arrText.map((index, key) =>
        <option key={key} >{index}</option>
        )

        return(
            <div className="div-form">
                <div className="div-div-form">
                    <select className="select-div" onChange={e => {
                        this.changeValute(e.target.value)
                    }}>
                        {test}
                    </select>
                    <input className="input-div" type="number" onChange={e => {
                        this.clg(e.target.value)
                    }}/>
                </div>
                <h1 className="h1-result">{this.state.result}</h1>
 
            </div>
        )
    }
}