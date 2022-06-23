import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import '../../style/toDoForm.scss'

const ToDoForm = ({setInputName, setInputDescription, inputDescription, inputName, addTodo}) => {

    const handleChangeName = event => {
        setInputName(event.target.value);
    }

    const handleChangeDescription = event => {
        setInputDescription(event.target.value);
    }



    return (
            <form className="todo-form"> 
                <input type="text" placeholder="add name" value={inputName} onChange={handleChangeName}></input>
                <input placeholder="add description" value={inputDescription} onChange={handleChangeDescription}></input>
                <button onClick={addTodo}>
                   <FontAwesomeIcon icon={faPlus} /> 
                </button>
                
            </form>   
    )

}

export default ToDoForm;