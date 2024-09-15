import React, { useState } from 'react';

const Preferences = () => {
    const [defaultReminderTime, setDefaultReminderTime] = useState(5);

    const handleSave = () => {
        
        console.log('Preferences saved:', defaultReminderTime);
    };

    return (
        <div className="preferences">
            <h2>Notification Preferences</h2>
            <label>
                Default Reminder Time (minutes):
                <input
                    type="number"
                    value={defaultReminderTime}
                    onChange={(e) => setDefaultReminderTime(e.target.value)}
                />
            </label>
            <button onClick={handleSave}>Save Preferences</button>
        </div>
    );
};

export default Preferences;