import React, { Component }  from 'react';
import './TrafficLight.css';
import classNames from 'classnames';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component{
    
    render() {
        const { currentColor } = this.props;
        console.log('Rendering....' + currentColor);
        return (<div className="trafficLight">
                    <div className={classNames('bulb', 'red', {
                        active: currentColor === RED
                    })}></div>
                    <div className={classNames('bulb', 'orange', {
                        active: currentColor === ORANGE
                    })}></div>
                    <div className={classNames('bulb', 'green', {
                        active: currentColor === GREEN
                    })}></div>
                </div>);
    }
}

export default TrafficLight;