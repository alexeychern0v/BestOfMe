export default function HabitCard ({ habitName, completedStatus, imageSrc, imageSize = 70 }) {
    return (
        <section className = "habitCard">
            <h3> { habitName } </h3>
            <img
                src = { imageSrc }
                width = { imageSize }
                height = { imageSize }
                alt = { habitName }
            />
            <p> { completedStatus } </p>
        </section>
   )
}