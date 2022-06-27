import React from "react";
import ToDo from "../ToDo/ToDo";
import '../../style/todoList.scss'


const ToDoList = ({todos, setTodos, inputName, setInputName}) => {
    return (
        <div className="todo-list-wrapper">
            <ul>
                {todos.map((todo, index)=> (
                    <ToDo 
                    key={todo.id}
                    index={index}
                    todos={todos}
                    setTodos={setTodos} 
                    todo={todo}
                    inputName={inputName}
                    setInputName={setInputName}                   
                    />
                ))}
            </ul>
        </div>
    )
}

export default ToDoList