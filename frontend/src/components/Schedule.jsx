import React, { useState } from 'react';
import styles from './Schedule.module.css'; // Notez le .module.css

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  const scheduleData = {
    day1: [
      { time: '09:00 - 09:30', activity: 'Opening Ceremony & Welcome', location: 'Main Auditorium' },
      { time: '09:30 - 10:30', activity: 'Rules Briefing & Environment Overview', location: 'Competition Hall' },
      { time: '10:30 - 12:00', activity: 'Preparation Phase & Tool Setup', location: 'Team Stations' },
      { time: '12:00 - 13:00', activity: 'Lunch Break', location: 'Restaurant' },
      { time: '13:00 - 21:00', activity: 'Red vs Blue Engagement - Session 1', location: 'Competition Hall' },
      { time: '21:00 - 21:30', activity: 'Dinner Break', location: 'Main Auditorium' },
      { time: '21:30 - 00:00', activity: 'Red vs Blue Engagement - Session 2', location: 'Main Auditorium' }
    ],
    day2: [
      { time: '08:00 - 09:30', activity: 'Morning Briefing & Rules Update', location: 'Main Auditorium' },
      { time: '09:30 - 12:30', activity: 'Red vs Blue Engagement - Session 3', location: 'Competition Hall' },
      { time: '12:30 - 13:30', activity: 'Lunch Break', location: 'Restaurant' },
      { time: '13:30 - 16:30', activity: 'Red vs Blue Engagement - Final Session', location: 'Competition Hall' },
      { time: '16:30 - 17:30', activity: 'Final Judging & Evaluation', location: 'Judges Room' },
      { time: '17:30 - 19:00', activity: 'Awards Ceremony & Closing', location: 'Main Auditorium' }
    ]
  };

  return (
    <section id="schedule" className={styles.schedule}>
      <div className={styles.container}>
        <h2>EVENT SCHEDULE - 2 DAYS</h2>
        
        {/* Day Selector */}
        <div className={styles.daySelector}>
          <button 
            className={`${styles.dayBtn} ${selectedDay === 1 ? styles.dayBtnActive : ''}`}
            onClick={() => setSelectedDay(1)}
          >
            Day 1 - Preparation & Start
          </button>
          <button 
            className={`${styles.dayBtn} ${selectedDay === 2 ? styles.dayBtnActive : ''}`}
            onClick={() => setSelectedDay(2)}
          >
            Day 2 - Finals & Closing
          </button>
        </div>

        <table className={styles.scheduleTable}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>Time</th>
              <th className={styles.tableHeader}>Activity</th>
              <th className={styles.tableHeader}>Location</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData[selectedDay === 1 ? 'day1' : 'day2'].map((item, index) => (
              <tr key={index} className={styles.tableRow}>
                <td className={`${styles.tableCell} ${styles.timeCell}`}>{item.time}</td>
                <td className={styles.tableCell}>{item.activity}</td>
                <td className={`${styles.tableCell} ${styles.locationCell}`}>{item.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Schedule;