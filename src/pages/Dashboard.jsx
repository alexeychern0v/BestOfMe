import HabitsList from '../components/HabitsList'

export default function Dashboard({ habits, onDelete, onToggle, setEditHabit }) {
  return (
    <>
      <HabitsList habits={ habits } onDelete={ onDelete } onToggle={ onToggle } onEdit = { setEditHabit } />
    </>
  )
}