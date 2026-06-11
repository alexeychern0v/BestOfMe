import HabitCard from './HabitCard'


export default function HabitsList({ habits, onDelete, onToggle }) {
  return (
    <>
      {habits.map((habit) => {
        return (
          <HabitCard
            name = { habit.name }
            image = { habit.image }
            status = { habit.status }
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