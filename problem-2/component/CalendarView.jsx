import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = () => {
    const tasks = [
        { title: 'Task 1', date: new Date(2024, 8, 15) },
        { title: 'Task 2', date: new Date(2024, 8, 16) }
    ];

    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const task = tasks.find((task) => task.date.toDateString() === date.toDateString());
            return task ? <p>{task.title}</p> : null;
        }
    };

    return (
        <div className="calendar-view">
            <h2>Calendar View</h2>
            <Calendar tileContent={tileContent} />
        </div>
    );
};

export default CalendarView;