import NewHabitForm from '../components/NewHabitForm'

export default function AddHabit({ onAdd, onUpdate, editHabit }) {
  return <NewHabitForm onAdd={onAdd} onUpdate={onUpdate} editHabit={editHabit} />
}