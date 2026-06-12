import HabitCard from './HabitCard'

export default function HabitsList({ habits, onDelete, onToggle }) {
  return (
    <>
      {habits.map((habit) => {
        return (
          <HabitCard
            name = { habit.name }
            status = { habit.status }
            category= { habit.category }
            difficulty= { habit.difficulty }
            id = { habit.id }
            key = { habit.id }
            onDelete = { onDelete }
            onToggle = { onToggle }
          />
        )
      })}
    </>
  )
}