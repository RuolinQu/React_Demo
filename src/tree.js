import React, { Component } from 'react';
import CreatNode from './creatNode';

class Tree extends Component {

    render() {
        return (<CreatNode handle={this.props.handle} tree={this.totree(this.props.data, 0)} />);
    }

    totree(list, parId) {
        let obj = {};
        let result = [];
        //将数组中数据转为键值对结构 (这里的数组和obj会相互引用)
        list.map(el => {
            obj[el.id] = el;
        })
        for (let i = 0, len = list.length; i < len; i++) {
            let id = list[i].parentId;
            if (id == parId) {
                result.push(list[i]);
                continue;
            }
            if (obj[id].children) {
                obj[id].children.push(list[i]);
            } else {
                obj[id].children = [list[i]];
            }
        }
        return result;
    }

}

export default Tree