import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

export default function NewHabitForm ({ habits, setHabits, editHabit }) {
  const navigate = useNavigate()
  
  const [habitForm, setHabitForm] = useState(
    editHabit || { name: '', category: '', difficulty: 1, day: ''}
  )

  useEffect(() => {
    if (editHabit) {
      setHabitForm(editHabit)
    }
  }, [editHabit])

  function handleHabitChange (event) {
    const { name, value } = event.target
    setHabitForm({...habitForm, [name]: value})
  }


  function handleHabitSubmit() {
    if (!habitForm.name.trim() || !habitForm.category || !habitForm.day) {
      console.log("Error: fill in all fields!")
      return;
    }
    if (editHabit) {
      setHabits(habits.map(h => h.id === editHabit.id ? { ...habitForm, id: h.id } : h))
    } else {
      setHabits([
        ...habits, { ...habitForm,
        status: 'Not done yet :(',
        id: crypto.randomUUID()
      } ])
    }
    
    setHabitForm({name: '', category: '', difficulty: 1})
    navigate('/')
  }

  return (
    <div className = "form-page">
      <h2>{editHabit ? 'Edit habit' : 'New habit'}</h2>
      
      <div className = "form-group">
        <label className = "form-label">Name</label>
        <input
          className = "form-input" 
          name = "name"
          placeholder = 'Enter new habit'
          value = { habitForm.name }
          onChange = { handleHabitChange }
        />
      </div>

      <div className = "form-group">
        <label className = "form-label">Category</label>
        <select
          className = "form-select"
          name = "category"
          value = {habitForm.category}
          onChange={handleHabitChange}
        >
          <option value="">Choose category</option>
          <option value="Health">Health</option>
          <option value="Work">Work</option>
          <option value="Sport">Sport</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="form-label">Difficulty</label>
        <select
          className="form-select"
          name="difficulty"
          value={habitForm.difficulty} 
          onChange={handleHabitChange}
        >
          <option value={1}>1 - easy</option>
          <option value={2}>2 - medium</option>
          <option value={3}>3 - difficult</option>
        </select>
      </div>

      <div className="form-group">
        <label className = "form-label">Frequency</label>
        <select
          className="form-select"
          name="day"
          value={habitForm.day} 
          onChange={handleHabitChange}
        >
          <option value="">Choose frequency</option>
          <option value="Daily">Daily</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>

        <button className="btn-submit" onClick={handleHabitSubmit}>
          {editHabit ? 'Save changes' : 'Add habit'}
        </button>
      </div>
    </div>
  )
}
