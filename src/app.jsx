import React from 'react'
import MyNav from './MyNav'

class App extends React.Component {
    render() {
        const nav1 = ["a", "b", "c"]
        const nav2 = ["e", "f", "g"]
        return (
            <div>
                <MyNav nav={nav1} />
                <MyNav nav={nav2} />
            </div>
        )
    }
}
export default App