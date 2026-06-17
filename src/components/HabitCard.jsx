import { useNavigate } from 'react-router'

export default function HabitCard ({ name, status, category, difficulty, id, onDelete, onToggle, onEdit }) {
    const navigate = useNavigate()

    function handleHabitEdit() {
        onEdit({ name, status, category, difficulty, id })
        navigate('/addHabit')
    }

    return (
        <section className={`habitCard ${status === 'Done :)' ? 'habitCard--done' : ''}`}>
            <button className="btn-toggle" onClick={() => onToggle(id)}>
                {status === 'Done :)' ? '✓' : ''}
            </button>
            <div className="habitCard__info">
                <div className="habitCard__name">{name}</div>
                <div className="habitCard__meta">{category} · {difficulty}⭐</div>
            </div>
            <div className="habitCard__actions">
                <button className="btn-icon" onClick={handleHabitEdit}>✏️</button>
                <button className="btn-icon btn-icon--danger" onClick={() => onDelete(id)}>🗑️</button>
            </div>
        </section>
    )
}