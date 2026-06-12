import NewHabitForm from '../components/NewHabitForm'
import HabitsList from '../components/HabitsList'

export default function Dashboard({ habits, setHabits, onDelete, onToggle }) {
  return (
    <>
      <NewHabitForm habits={ habits } setHabits={ setHabits } />
      <HabitsList habits={ habits } onDelete={ onDelete } onToggle={ onToggle } />
    </>
  )
}