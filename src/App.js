import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as actions from './store/actions/statistic';
import { useDispatch } from "react-redux";
import './App.css';
import Main from './Components/Main/Main';
import Menu from './Components/Menu/Menu';
import Statistic from './Components/Statistic/Statistic';
import ToDoPage from './Components/ToDoPage/ToDoPage';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);
  const [inputName, setInputName] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    const savedId = JSON.parse(localStorage.getItem('id'));
    if (todos) {
      setTodos(todos);
    }
    if (savedId) {
      setId(savedId);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const createId = () => {
    setId(id + 1);
    localStorage.setItem('id', JSON.stringify(id));
  }
  
  const addTodo = (event) => {
    createId();
    event.preventDefault();
    setTodos([
      ...todos,
      {
        name: inputName,
        description: inputDescription,
        id: id,
      }
    ])
    setInputName('');
    setInputDescription('');
    dispatch(actions.Add());
    if (todos.length === 0) {
      dispatch(actions.First())
    }
    dispatch(actions.Last())
  }

  return (
    <div className='app-wrapper'>
      <Menu className="menu" />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="todo" element={<ToDoPage className="to-do-page"
          addTodo={addTodo}
          todos={todos}
          setTodos={setTodos}
          inputName={inputName}
          setInputName={setInputName}
          inputDescription={inputDescription}
          setInputDescription={setInputDescription} />} />
        <Route path="statistic" element={<Statistic />} />
      </Routes>

    </div>
  );
}

export default App;
