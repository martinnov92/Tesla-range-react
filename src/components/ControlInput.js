import React, {Component} from 'react';

class ControlInput extends Component {
    constructor() {
        super();
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
    }
    plus() {
        var newNumber = this.props.number === this.props.max ? this.props.max : this.props.number + 5;
        var stateName = this.props.unit === "km" ? "speed" : "temperature";
        this.props.handleChange(stateName, newNumber);
    }
    minus() {
        var newNumber = this.props.number === this.props.min ? this.props.min : this.props.number - 5;
        var stateName = this.props.unit === "km" ? "speed" : "temperature";
        this.props.handleChange(stateName, newNumber);   
    }
    render () {
        return (
            <div className="controlers-input_box">
                <p className="controlers-header_text">
                    {this.props.headerText}
                </p>
                <div className="controlers-input_container">
                    <div className="controlers-input">
                        <p>
                            {this.props.number}
                            <span>
                                {this.props.unit === "km" ? "km" : "°C"}
                            </span>
                        </p>
                        <div className="controlers-buttons">
                            <button onClick={this.plus} className={`${this.props.number === this.props.max ? "hide" : ""}`}/>
                            <button onClick={this.minus} className={`${this.props.number === this.props.min ? "hide" : ""}`}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ControlInput;