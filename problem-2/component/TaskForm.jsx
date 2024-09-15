import React, { useState } from 'react';

const TaskForm = ({ onTaskAdded }) => {
    const [task, setTask] = useState({
        title: '',
        description: '',
        dueDate: '',
        reminderTime: 5 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Task added:', task);
        onTaskAdded();
        setTask({ title: '', description: '', dueDate: '', reminderTime: 5 });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={task.title}
                onChange={handleChange}
                placeholder="Task Title"
                required
            />
            <textarea
                name="description"
                value={task.description}
                onChange={handleChange}
                placeholder="Task Description"
                required
            />
            <input
                type="datetime-local"
                name="dueDate"
                value={task.dueDate}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="reminderTime"
                value={task.reminderTime}
                onChange={handleChange}
                placeholder="Reminder (minutes)"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;