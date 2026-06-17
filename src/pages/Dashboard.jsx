import { useNavigate } from 'react-router'
import { useState } from 'react'

import HabitsList from '../components/HabitsList'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export default function Dashboard({ habits, onDelete, onToggle, setEditHabit }) {
  const navigate = useNavigate()
  const [selectedDay, setSelectedDay] = useState('Monday')
  const dayFilteredHabits = habits.filter(habit => habit.day === selectedDay)
  return (
    <>
       <div>
        {days.map(day => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            style={{ fontWeight: selectedDay === day ? 'bold' : 'normal' }}
          >
            {day}
          </button>
        ))}
      </div>
      <button onClick={() => navigate('/addHabit')}>Add new habit</button>
      <HabitsList habits={ dayFilteredHabits } onDelete={ onDelete } onToggle={ onToggle } onEdit = { setEditHabit } />
    </>
  )
}