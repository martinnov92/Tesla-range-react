import React from 'react';

const Car = (props) => {
    const style = {
        "animation": `infinite-spinning 750ms steps({props.speed / 5}) infinite`
    }
    return (
        <div className="tesla_holder">
            <h1>{props.title}</h1>
            <div className="tesla_car-white">
                <div className="tesla_car">
                    <div className="tesla_car-wheels tesla_car-wheels_left" style={style}/>
                    <div className="tesla_car-wheels tesla_car-wheels_right" style={style}/>
                </div>
            </div>
        </div>
    )
}

export default Car;
