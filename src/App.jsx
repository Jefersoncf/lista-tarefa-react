import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
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
 
  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
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
