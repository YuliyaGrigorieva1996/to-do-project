import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions/statistic"
import '../../style/todo.scss';
import { FaEdit, FaSave } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
import { IconContext } from "react-icons";

const ToDo = ({ todos, setTodos, todo }) => {
  const [edit, setEdit] = useState(false);
  const [newName, setNewName] = useState(todo.name);
  const [newDescription, setNewDescription] = useState(todo.description);
  const dispatch = useDispatch();

  const handleDelete = () => {
    const deletedTodos = todos.filter(el => el.id !== todo.id);
    setTodos(deletedTodos)
    dispatch (actions.Delete())

  }

  const editTodos = () => {
    setEdit(true);
  }
  const editName = (event) => {
    setNewName(event.target.value);
    
  }
  const editDescription = (event) => {
    setNewDescription(event.target.value);
  }
  const saveEditedTodo = () => {
    const todoElem = todo;
    todoElem.name = newName;
    todoElem.description = newDescription;
    setTodos(todos);
    setEdit(false);
        dispatch (actions.Edit())
  }
  return (
    <div className='todo-wrappper'>
      {edit ? (
        <>
          <input type="text" value={newName} autoFocus onChange={editName}></input>
          <input type="text" value={newDescription} onChange={editDescription}></input>
          <IconContext.Provider value={{ size: '2em', color: 'grey' }}>
            <FaSave onClick={saveEditedTodo} className="btn-save" />
          </IconContext.Provider>
        </>
      ) : (
        <div >
          <li>{todo.name ? todo.name : 'name'}</li>
          <li>{todo.description ? todo.description : 'description'}</li>
          <IconContext.Provider value={{size: '2em', color: 'grey'}}>
              <TiDelete onClick={handleDelete} className="btn-delete" />
              <FaEdit onClick={editTodos} className="btn-edit" />
          </IconContext.Provider>
         
        </div>
      )}
    </div>

  )


}

export default ToDo