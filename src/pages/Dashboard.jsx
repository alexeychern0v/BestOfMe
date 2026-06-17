import HabitsList from '../components/HabitsList'
import { useNavigate } from 'react-router'

export default function Dashboard({ habits, onDelete, onToggle, setEditHabit }) {
  const navigate = useNavigate()
  return (
    <>
      <button onClick={() => navigate('/addHabit')}>Add new habit</button>
      <HabitsList habits={ habits } onDelete={ onDelete } onToggle={ onToggle } onEdit = { setEditHabit } />
    </>
  )
}