import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tasks from './components/Tasks';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import TaskDetails from './components/TaskDetails';
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

  useEffect(() => {
    
    const fetchTasks = async () => {
      const {data} = await axios.get('./todo.json');
      setTasks(data);
    };
    fetchTasks();
  }, []);

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
 
  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id === taskId);
    setTasks(newTasks);
  }

  return (
    <Router>
      <div className='container'>
        <Header/>
        <Route path='/' exact render={() => ( 
            <>
              <AddTask handleTaskAddtion={handleTaskAddtion}/>
              <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
            </>
          )}
        />
        <Route path='/:taskTitle' exact component={TaskDetails}/>
      </div>
    </Router>
  );
};

export default App;
