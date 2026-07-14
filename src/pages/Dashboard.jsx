import { useNavigate } from 'react-router'
import { useState } from 'react'

import HabitsList from '../components/HabitsList'

const daysWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const today = daysWeek[new Date().getDay()]

export default function Dashboard({ habits, onDelete, onToggle, setEditHabit }) {
  const navigate = useNavigate()
  const [selectedDay, setSelectedDay] = useState(today)

  // Day-based filtering removed for now — the current DB schema has no
  // per-habit "day" field, only date-based logs. The week-strip UI stays
  // as a visual placeholder; wiring it to real per-day data is a
  // documented "next iteration" item, not a bug.
  // const dayFilteredHabits = habits.filter(...) — removed

  return (
    <div className='dashboard'>
        <div className='dashboard__header'>
          <h1 className='dashboard__title'>Best of Me</h1>
          <div className='dashboard__avatar' onClick={() => navigate('/profile')}>👤</div>
        </div>
        <div className='week-strip'>
          {daysWeek.map(day => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`week-day ${selectedDay === day ? 'week-day--active' : ''}`}
            >
              {day.slice(0, 2)}
            </button>
          ))}
        </div>
        <button className="btn-add" onClick={() => navigate('/addHabit')}>+ Add new habit</button>
        <HabitsList habits={ habits } onDelete={ onDelete } onToggle={ onToggle } onEdit={ setEditHabit } />
      </div>
  )
}