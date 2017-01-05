import React, {Component} from 'react';

class ControlInput extends Component {
    constructor() {
        super();
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
        this.handleEditing = this.handleEditing.bind(this);
        this.handleFocusOut = this.handleFocusOut.bind(this);
        this.displayControlBox = this.displayControlBox.bind(this);
        this.editInputBox = this.editInputBox.bind(this);
        this.updateParentState = this.updateParentState.bind(this);
    }
    state = {
        "editing": false
    }
    plus() {
        const newNumber = this.props.number === this.props.max ? this.props.max : this.props.number + 5;
        const stateName = this.props.unit === "km" ? "speed" : "temperature";
        this.props.handleChange(stateName, newNumber);
    }
    minus() {
        const newNumber = this.props.number === this.props.min ? this.props.min : this.props.number - 5;
        const stateName = this.props.unit === "km" ? "speed" : "temperature";
        this.props.handleChange(stateName, newNumber);   
    }
    updateParentState(e) {
        const newNumber = e.target.value > 120 ? 120 : e.target.value;
        const stateName = this.props.unit === "km" ? "speed" : "temperature";
        this.props.handleChange(stateName, newNumber === "" ? 50 : newNumber);
    }
    handleEditing() {
        this.setState({
            "editing": true
        })
    }
    handleFocusOut() {
        this.setState({
            "editing": false
        })
    }
    displayControlBox() {
        return (
            <div>
                <p onClick={this.handleEditing}>
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
        );
    }
    editInputBox() {
        return (
        <input 
            type="number" 
            onChange={(e) => this.updateParentState(e)} 
            onBlur={this.handleFocusOut} 
            defaultValue={this.props.number} 
            autoFocus />
        );      
    }
    render () {
        return (
            <div className="controlers-input_box">
                <p className="controlers-header_text">
                    {this.props.headerText}
                </p>
                <div className="controlers-input_container">
                    <div className="controlers-input">
                    {
                        this.state.editing ? this.editInputBox() : this.displayControlBox()
                    }
                    </div>
                </div>
            </div>
        )
    }
};

ControlInput.propTypes = {
  number: React.PropTypes.number,
  max: React.PropTypes.number,
  unit: React.PropTypes.string,
  handleChange : React.PropTypes.func 
}

export default ControlInput;