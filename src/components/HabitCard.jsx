export default function HabitCard ({ name, status, category, difficulty, id, onDelete, onToggle }) {
    return (
        <section className = "habitCard">
            <h3> { name } </h3>
            <p> Category: { category } </p>
            <p> Difficulty: { difficulty } </p>
            <p> { status } </p>
            <button onClick={() => onDelete(id)}>Delete habit</button>
            <button onClick={() => onToggle(id)}>Toggle</button>
        </section>
   )
}