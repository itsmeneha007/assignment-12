import React, { useState, useEffect } from 'react';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        
        const storedTasks = [
            { title: 'Task 1', description: 'Do something', dueDate: '2024-09-15T12:00', reminderTime: 5 },
            { title: 'Task 2', description: 'Do another thing', dueDate: '2024-09-16T14:00', reminderTime: 10 }
        ];
        setTasks(storedTasks);
    }, []);

    return (
        <div className="task-list">
            <h2>Your Tasks</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <strong>{task.title}</strong> - {task.description}
                        <br />
                        Due: {task.dueDate} | Reminder: {task.reminderTime} minutes before
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;