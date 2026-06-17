import NewHabitForm from '../components/NewHabitForm'

export default function AddHabit( {habits, setHabits, editHabit }) {
  return (
    <>
      <NewHabitForm habits={ habits } setHabits={ setHabits } editHabit = { editHabit }/>  
    </>
  )
}