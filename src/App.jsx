import React, { useState } from 'react';
import Tasks from './components/Tasks';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { AddTask } from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar NodeJS',
      completed: false,
    },
    {
      id: '2',
      title: 'Pesquisar sobre Middleware',
      completed: false,
    }
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if(task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });
    setTasks(newTasks);
  }

  const handleTaskAddtion = (taskTitle) => {
    const newTasks = [...tasks, 
      {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
      },
    ];
    setTasks(newTasks);
  };

  return <div className='container'>
    <AddTask handleTaskAddtion={handleTaskAddtion}/>
    <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/>
  </div>;
}

export default App;
