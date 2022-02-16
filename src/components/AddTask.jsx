import React, { useState } from 'react';
import './AddTask.css';
import { Button } from './Button';

export const AddTask = ({handleTaskAddtion}) => {
  const [inputData, setInputData] = useState('');

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddtion(inputData);
    setInputData('');
  }

  return (
    <div className='add-task-container'>
      <input 
        onChange={handleInputChange}
        value={inputData}
        className='add-task-input' type='text'/> 

      <div className="add-task-container">
        <Button onClick={handleAddTaskClick}> Adicionar</Button>
      </div>
    </div>
  );
};
