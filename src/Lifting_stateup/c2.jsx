import React from 'react'

export default class Child2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                c1:
                <label>
                    {this.props.num}
                    <input value={this.props.num} />
                    <button>+</button>
                </label>
            </div>
        )
    }
}