import { useNavigate } from 'react-router'
import { useState } from 'react'

import HabitsList from '../components/HabitsList'

const daysWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const today = daysWeek[new Date().getDay()]


export default function Dashboard({ habits, onDelete, onToggle, setEditHabit }) {
  const navigate = useNavigate()
  const [selectedDay, setSelectedDay] = useState(today)
  const dayFilteredHabits = habits.filter(habit => {
    if (habit.day === 'Daily') return true;
    return habit.day === selectedDay  
  })
  return (
    <div className='dashboard'>
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
      <HabitsList habits={ dayFilteredHabits } onDelete={ onDelete } onToggle={ onToggle } onEdit = { setEditHabit } />
    </div>
  )
}