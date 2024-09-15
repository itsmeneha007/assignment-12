import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import CalendarView from './components/CalendarView';
import Preferences from './components/Preferences';
import './App.css'; 

const App = () => {
    const [tasksUpdated, setTasksUpdated] = useState(false);

    const handleTaskAdded = () => {
        setTasksUpdated(!tasksUpdated);
    };

    return (
        <div className="app-container">
            <h1>TaskMaster Inc. Task Management</h1>
            <TaskForm onTaskAdded={handleTaskAdded} />
            <TaskList key={tasksUpdated} />
            <CalendarView />
            <Preferences />
        </div>
    );
};

export default App;