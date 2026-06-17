import HabitCard from './HabitCard'

export default function HabitsList({ habits, onDelete, onToggle, onEdit }) {
  return (
    <div className="habits-list">
      {habits.map((habit) => {
        return (
          <HabitCard
            name = { habit.name }
            status = { habit.status }
            category= { habit.category }
            difficulty= { habit.difficulty }
            id = { habit.id }
            key = { habit.id }
            onToggle = { onToggle }
            onDelete = { onDelete }
            onEdit = { onEdit }
          />
        )
      })}
    </div>
  )
}