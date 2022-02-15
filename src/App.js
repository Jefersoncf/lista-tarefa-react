import React, { useState } from 'react';
import Tasks from './components/Tasks';
import './App.css';

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

  return <div className='container'>
    <Tasks tasks={tasks}/>
  </div>;
}

export default App;
