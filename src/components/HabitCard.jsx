    export default function HabitCard ({ name, status, category, difficulty, id, onDelete, onToggle, onEdit }) {
        return (
            <section className = "habitCard">
                <h3> { name } </h3>
                <p> Category: { category } </p>
                <p> Difficulty: { difficulty } </p>
                <p> { status } </p>
                <button onClick={() => onToggle(id)}>Toggle</button>
                <button onClick={() => onEdit({ name, status, category, difficulty, id })}>Edit</button>
                <button onClick={() => onDelete(id)}>Delete habit</button>
            </section>
    )
    }