import { useState } from 'react'

export default function NewHabitForm ({ habits, setHabits }) {
  const [habitForm, setHabitForm] = useState({
    name: '',
    category: '',
    difficulty: 1,
  })

  function handleHabitChange (event) {
    const { name, value } = event.target
    setHabitForm({...habitForm, [name]: value})
  }


  function handleHabitSubmit() {
    if (!habitForm.name.trim() || !habitForm.category) {
      console.log("Error: fill in all fields!")
      return;
    }
    setHabits([
      ...habits, { ...habitForm,
        status: 'Not done yet :(',
        id: crypto.randomUUID()
      }
    ])

    setHabitForm({name: '', category: '', difficulty: 1})
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
      <select name = 'difficulty' value={habitForm.difficulty} onChange={handleHabitChange}>
        <option value={1}>1 - easy</option>
        <option value={2}>2 - medium</option>
        <option value={3}>3 - difficult</option>
      </select>

      <button onClick = { handleHabitSubmit }>Add habit</button>
    </>
  )
}
