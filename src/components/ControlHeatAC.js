import React, {Component} from 'react'

class ControlHeatAC extends Component {
    constructor() {
        super();
        this.handleHeating = this.handleHeating.bind(this);
    }
    handleHeating() {
        var checkbox = document.querySelector("#heating").checked;
        this.props.handleHeating(checkbox);
    }
    render () {
        return (
            <div className="tesla_climate-control">
                <label htmlFor="heating" className={`tesla_climate ${this.props.state.heating === "ac" ? "" : "heat"} ${this.props.state.heatingOn === true ? "on" : ""}`}>
                    <p>
                        {this.props.state.heating === "ac" ? "AC " : "Heat "}
                        {this.props.state.heatingOn === true ? "ON" : "OFF"}
                    </p>
                    <i className={`tesla_climate-icon ${this.props.state.heatingOn ? "on" : ""}`}></i>
                    <input type="checkbox" id="heating" className="hide" onChange={this.handleHeating}/>
                </label>
            </div>
        )
    }
}

export default ControlHeatAC;