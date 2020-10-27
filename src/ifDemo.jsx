import React from 'react'

export default class IfDemo extends React.Component {
    constructor() {
        super()
        this.state = {
            isLogin: false
        }
    }

    clickHandler = () => {
        this.setState({
            isLogin: !this.state.isLogin
        })
    }

    render() {
        let showView = this.state.isLogin ?
            <div>in</div> :
            <div>out</div>
        return (
            <div>
                if render:{showView}
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}
