import { useState } from 'react'

export default function NewHabitInput ({ habits, setHabits }) {
  const [inputHabit, setInputHabit] = useState('')

  function saveHabitInput (event) {
    setInputHabit(event.target.value)
  }

  function displayNewHabit() {
    if (!inputHabit.trim()) {
      console.log("Error: empty habit input!")
      return;
    }
    setHabits([
      ...habits, {
        name: inputHabit,
        status: 'Not done yet :(',
        id: crypto.randomUUID()
      }
    ])

    setInputHabit('')
  }

  return (
    <>
      <input
        placeholder = 'Enter new habit'
        onChange = { saveHabitInput }
        value = { inputHabit }
      />
      <button onClick = { displayNewHabit }>Add habit</button>
    </>
  )
}
