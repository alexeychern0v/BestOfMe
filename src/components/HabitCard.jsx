export default function HabitCard ({ name, image, status, imageSize = 70, id, onDelete }) {
    return (
        <section className = "habitCard">
            <h3> { name } </h3>
            <img
                src = { image }
                width = { imageSize }
                height = { imageSize }
                alt = { name }
            />
            <p> { status } </p>
            <button onClick={() => onDelete(id)}>Delete habit</button>
        </section>
   )
}