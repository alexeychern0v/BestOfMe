export default function HabitCard ({ habit, imageSize = 70 }) {
    return (
        <section className = "habitCard">
            <h3> { habit.name } </h3>
            <img
                src = { habit.image }
                width = { imageSize }
                height = { imageSize }
                alt = { habit.name }
            />
            <p> { habit.status } </p>
        </section>
   )
}