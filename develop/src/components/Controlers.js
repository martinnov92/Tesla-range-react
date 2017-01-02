import React from 'react';
import ControlInput from './ControlInput';
import ControlHeatAC from './ControlHeatAC';

const Controlers = (props) => {
        return (
            <div className="controlers_holder">
                <ControlInput headerText="Rychlost" unit="km" number={props.state.speed} handleChange={props.handleChange} min={20} max={120}/>
                <ControlHeatAC state={props.state} handleHeating={props.handleHeating} />
                <ControlInput headerText="Venkovní teplota" unit="c" number={props.state.temperature} handleChange={props.handleChange} min={-20} max={40} />
            </div>
        )
}

export default Controlers;