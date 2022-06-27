import React from "react";
import "../../style/main.scss";

const Main = () => {
    return (
        <div>
            <h1 className="main-title">Create your own to do list!</h1>
             <div className="main-content">
                <p>On this site you can create a todolist for you</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFb0b4D0QjeeepuAa1nmcksjmNSC0dfRijA&usqp=CAU"></img>
                <p>And also you can find out some statistic about your tasks</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3DLyf3uOpuPM22D_1mFP2oRoSFuglusD2w&usqp=CAU"></img>
            </div> 
        </div>
    )
}

export default Main;