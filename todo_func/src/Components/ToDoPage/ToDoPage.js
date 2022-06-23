import React from "react"
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList";
import '../../style/ToDoPage.scss'

const ToDoPage = ({ addTodo, todos, setTodos, inputName, setInputName, inputDescription, setInputDescription}) => {
    return (
        <div className="todo-page-wrapper">
            <h1>ToDo List</h1>
            <ToDoForm
            addTodo={addTodo} 
            setInputName={setInputName}
            setInputDescription={setInputDescription}
            inputName={inputName}
            inputDescription={inputDescription}
            todos={todos}
            setTodos={setTodos} 
            />
            <ToDoList todos={todos} 
            setTodos={setTodos}
            inputName={inputName}
            setInputName={setInputName} />
        </div>

    );
}

export default ToDoPage;