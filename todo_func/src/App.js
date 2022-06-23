import React, { useState, useEffect} from 'react';
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
  const [randomId, setRandomId] = useState(1);
  const [inputName, setInputName] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  useEffect(() => {
    if (todos[todos.length - 1]) {
      dispatch(actions.Last())
    }
  });

  useEffect(() => {
    if (todos[0]?.id === 1) {
      dispatch(actions.First())
    } 
  }, [todos[0]?.id])

  const createId = () => {
      setRandomId(randomId + 1);
      return randomId;
  }
  const addTodo = (event) => {
      event.preventDefault();
      setTodos([
          ...todos,
          {
          name: inputName,
          description: inputDescription,
          id: createId(),
      }])
      setInputName('');
      setInputDescription('');
      dispatch(actions.Add());
      
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
