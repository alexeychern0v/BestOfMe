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
    if (!habitForm.name.trim() || !habitForm.category) {
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
    <>
      <input
        name = 'name'
        placeholder = 'Enter new habit'
        value = { habitForm.name }
        onChange = { handleHabitChange }
      />
      <select name= 'category' value = {habitForm.category} onChange={handleHabitChange}>
        <option value="">Choose category</option>
        <option value="health">Health</option>
        <option value="work">Work</option>
        <option value="sport">Sport</option>
      </select>
      <select name="day" value={habitForm.day} onChange={handleHabitChange}>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>
      <select name = 'difficulty' value={habitForm.difficulty} onChange={handleHabitChange}>
        <option value={1}>1 - easy</option>
        <option value={2}>2 - medium</option>
        <option value={3}>3 - difficult</option>
      </select>

      <button onClick = { handleHabitSubmit }>Add habit</button>
    </>
  )
}
