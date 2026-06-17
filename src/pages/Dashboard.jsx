import NewHabitForm from '../components/NewHabitForm'
import HabitsList from '../components/HabitsList'

export default function Dashboard({ habits, setHabits, onDelete, onToggle, editHabit, setEditHabit }) {
  return (
    <>
      <NewHabitForm habits={ habits } setHabits={ setHabits } editHabit = { editHabit }/>
      <HabitsList habits={ habits } onDelete={ onDelete } onToggle={ onToggle } onEdit = { setEditHabit } />
    </>
  )
}