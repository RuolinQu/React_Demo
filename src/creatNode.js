import React, { useState, useEffect } from 'react';
import './tree.css';

function CreatNode(props) {
    return (
        <ul className="ul">
            {
                props.tree && props.tree.map(item => {
                    return (
                        <Node {...item} handle={props.handle} key={item.id}>
                            <CreatNode handle={props.handle} tree={item.children} key={item.id} />
                        </Node>
                    )
                })
            }
        </ul>
    );
}

function Node(props) {
    const [cur, setCur] = useState(false);
    let listclick = (e) => {
        props.handle(e, {
            name: props.name,
            id: props.id,
            parentId: props.parentId
        })
        setCur(!cur)
    }
    return (
        <li className={cur ? "cur" : ""}>
            <p onClick={listclick}>{props.name}</p>
            {props.children}
        </li>
    );
}

export default CreatNode