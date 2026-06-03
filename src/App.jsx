import HabitCard from './components/HabitCard' 
import waterImage from './assets/waterImage.png'
import gymImage from './assets/gymImage.jpg'
import eatImage from './assets/eatImage.jpg'
import { useState } from 'react'


const initialHabits = [{
    name: 'Drink 2l of water',
    image: waterImage,
    status: 'Done :)',
    id: crypto.randomUUID()
  }, {
    name: 'Go to the gym',
    image: gymImage,
    status: 'Not done yet :(',
    id: crypto.randomUUID()
  }, {
    name: 'Eat 3000 calories',
    image: eatImage,
    status: 'Not done yet :(',
    id: crypto.randomUUID()
  }]

function NewHabitInput ({ habits, setHabits }) {
  const [habitInput, setHabitInput] = useState('')

  function saveHabitInput (event) {
    setHabitInput(event.target.value)
  }

  function displayNewHabit() {
    setHabits([
      ...habits, {
        name: habitInput,
        status: 'Not done yet :(',
        id: crypto.randomUUID()
      }
    ])

    setHabitInput('')
  }

  return (
    <>
      <input
        placeholder = 'Enter new habit'
        onChange = {saveHabitInput}
        value = {habitInput}
      />
      <button onClick = {displayNewHabit}>Add habit</button>
    </>
  )
}

function HabitsList({ habits }) {
  return (
    <>
      {habits.map((habit) => {
        return (
          <HabitCard
            name = {habit.name}
            image = {habit.image}
            status = {habit.status}
            key = {habit.id}
          />
        )
      })}
    </>
  )
}

function App() {
  const [habits, setHabits] = useState(initialHabits)
  return (
    <>
      <NewHabitInput
        habits = { habits }
        setHabits = { setHabits }
      />
      <HabitsList
        habits = { habits }
      />
    </>
  )  
}

export default App