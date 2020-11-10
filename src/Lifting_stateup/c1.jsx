import React from 'react'

export default class Child1 extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        return (
            <fieldset>
                <input value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        );
    }

}