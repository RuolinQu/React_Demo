import React, { Component } from 'react';
import Tree from './tree';

class TestTree extends Component {
    state = {
        treeData: [
            { id: 2, name: 'Uber Org', parentId: 0 },
            { id: 3, name: 'Payment', parentId: 1 },
            { id: 10, name: 'Payment', parentId: 7 },
            {
                id: 1, name: 'Product', parentId: 2
            },
            { id: 4, name: 'Design', parentId: 1 },
            { id: 12, name: 'Mobility', parentId: 5 },
            { id: 13, name: 'Marketing', parentId: 5 },
            { id: 5, name: 'Technology', parentId: 2 },
            { id: 14, name: 'Hardware&Veehicle', parentId: 7 },
            { id: 6, name: 'Solution', parentId: 3 },
            { id: 7, name: 'Uber ATG', parentId: 2 },
            { id: 8, name: 'Business', parentId: 4 },
            { id: 11, name: 'Platform&Growth', parentId: 2 },
            { id: 15, name: 'Platform&Growth', parentId: 11 },
            { id: 16, name: 'Platform&Growth', parentId: 11 },
        ]
    }

    listClick = (e, data) => {
        console.log(data)
    }

    render() {
        return (

            <div class="wrapper">
                <header>
                    <h1> <span>U</span>ber O<span>r</span><span>g</span> Chart Dashb<span>o</span>ar<span>d</span></h1>
                </header>
                <main>
                    <Tree data={this.state.treeData} handle={this.listClick} />
                </main>
                <footer>
                    Produced by Ruolin Qu
                </footer>

            </div>
        );
    }
}

export default TestTree
