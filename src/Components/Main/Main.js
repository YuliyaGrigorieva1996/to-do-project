import React from "react";
import "../../style/main.scss";
import toDoList from "../../images/to-do.png"
import statistic from "../../images/statistic.png"

const Main = () => {
    return (
        <div>
            <h1 className="main-title">Create your own to do list!</h1>
             <div className="main-content">
                <p>On this site you can create a todolist for you</p>
                <img src={toDoList} alt="to do list"/>
                <p>And also you can find out some statistic about your tasks</p>
                <img src={statistic} alt="statistic"></img>
            </div> 
        </div>
    )
}

export default Main;