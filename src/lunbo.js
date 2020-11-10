import React, { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom'
import './lunbo.css'

const images = [
    "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593083707685&di=52240172239e6d02308b39b9d3734c00&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F56%2F12%2F01300000164151121576126282411.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593083707685&di=d8ba4c91f049e5af004e53aad9ee3445&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F64%2F76%2F20300001349415131407760417677.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593083707685&di=169e557aa5d35a51037c1f3aba0bf372&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F27%2F10%2F01300000324235124757108108752.jpg"
]

function LunBoComponent() {
    let [currentPointIndex, setCurrentPointIndex] = useState(0);
    let [timer, setTimer] = useState(0);

    const clickPoint = (currentPointIndex, timer, setTimer, e) => {
        clearTimeout(timer);
        setCurrentPointIndex(parseInt(e.target.value));

        let timers = setInterval(() => {
            document.querySelector(".right-btn").click();
        }, 1000);
        setTimer(timers)
    }


    useEffect(() => {
        changeImage(currentPointIndex);
        changPoint(currentPointIndex);
    })

    useEffect(() => {
        let timers = setInterval(() => {
            document.querySelector(".right-btn").click();
        }, 1000);
        setTimer(timers)
    }, [])

    const changeImage = (currentPointIndex) => {
        document.querySelector(".images").style = `transition:all 0.3s;
        transform:translateX(-${400 * currentPointIndex}px)`
    }

    const changPoint = (currentPointIndex) => {
        let poistList = document.querySelectorAll(".pointList li");
        for (let i = 0; i < poistList.length; i++) {
            poistList[i].className = "";
        }
        poistList[currentPointIndex].className = "current";
    }

    const btnLeftClick = (currentPointIndex) => {
        let index = currentPointIndex == 0 ? document.querySelectorAll(".images li").length - 1 : currentPointIndex - 1;
        setCurrentPointIndex(
            index
        )
    }

    const btnRightClick = (currentPointIndex) => {
        let index = currentPointIndex == document.querySelectorAll(".images li").length - 1 ? 0 : currentPointIndex + 1;
        setCurrentPointIndex(index);
    }
    return (
        <div id="container">
            <ul className="images">
                <li>
                    <img src={images[0]} />
                </li>
                <li>
                    <img src={images[1]} />
                </li>
                <li>
                    <img src={images[2]} />
                </li>
                <li>
                    <img src={images[3]} />
                </li>
            </ul>
            <div className="btn left-btn" onClick={
                () => {
                    btnLeftClick(currentPointIndex)
                }
            }>&lt;</div>
            <div className="btn right-btn" onClick={() => btnRightClick(currentPointIndex)}>&gt;</div>
            <ul className="pointList" onClick={(e) => {
                clickPoint(currentPointIndex, timer, setTimer, e)
            }
            }>
                <li className="current" value="0"></li>
                <li value="1"></li>
                <li value="2"></li>
                <li value="3"></li>
            </ul>
        </div>
    )

}

export default LunBoComponent;