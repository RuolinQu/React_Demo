import React from 'react'
import Child1 from './c1'
import Child2 from './c2'

export default class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = { t: 0 };
    }

    handleCelsiusChange(temperature) {
        this.setState({
            t: temperature
        });
    }

    handleFahrenheitChange(temperature) {
        this.setState({
            t: temperature - 22
        });
    }

    render() {
        const temperature = this.state.t;

        return (
            <div>
                <Child1
                    temperature={this.state.t}
                    onTemperatureChange={this.handleCelsiusChange} />
                <Child1
                    temperature={this.state.t + 22}
                    onTemperatureChange={this.handleFahrenheitChange} />
            </div>
        );
    }
}