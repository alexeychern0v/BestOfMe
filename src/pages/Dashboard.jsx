import NewHabitInput from '../components/NewHabitInput'
import HabitsList from '../components/HabitsList'

export default function Dashboard({ habits, setHabits, onDelete, onToggle }) {
  return (
    <>
      <NewHabitInput habits={ habits } setHabits={ setHabits } />
      <HabitsList habits={ habits } onDelete={ onDelete } onToggle={ onToggle } />
    </>
  )
}