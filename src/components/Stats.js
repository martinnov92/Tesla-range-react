import React from 'react';
import cars from '../cars';

class Stats extends React.Component {
    constructor() {
        super();
        this.renderLi = this.renderLi.bind(this);
        this.calc = this.calc.bind(this);
    }
    state = {
        "cars": cars
    }
    renderLi(key) {
        return (
            <li key={key}>
                <div className={`stats-icon icon-${this.state.cars[key].type}`}></div>
                <p>
                    {
                        this.calc(key)
                    }
                </p>
            </li>  
        )    
    }
    calc(key) {
        var minus = this.props.temperature <= 0 ? (-(this.props.temperature / 1.3)) : this.props.temperature;
        var result = Math.floor(((this.state.cars[key].c * (minus === 0 ? 1.5 : minus)) * this.props.speed) / 10);
        return result;
    }
    render() {
        return (
            <div className="stats">
                <ul className="stats_ul">
                    {
                        Object
                            .keys(this.state.cars)
                            .map(key => this.renderLi(key))
                    }
                </ul>
            </div>
        )
    }
}

export default Stats;