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


function HabitsList({ habits, onDelete, onToggle }) {
  return (
    <>
      {habits.map((habit) => {
        return (
          <HabitCard
            name = { habit.name }
            image = { habit.image }
            status = { habit.status }
            id = { habit.id }
            key = { habit.id }
            onDelete = { onDelete }
            onToggle = { onToggle }
          />
        )
      })}
    </>
  )
}

function App() {
  const [habits, setHabits] = useState(initialHabits)
  
  function deleteHabit(id) {
    setHabits(habits.filter((habit) => habit.id !== id)) // !== remain habit if the ID is not = ID user wants to delete 
  }

  function toggleHabit(id) {
    setHabits(habits.map((habit) => habit.id === id // checks if the toggle habit id matches
      ? {...habit, status: habit.status === 'Not done yet :(' ? 'Done :)' : 'Not done yet :('} // if TRUE copy all habit and change only status
      : habit)) // if FALSE leave as it was
  }

  return (
    <>
      <NewHabitInput
        habits = { habits }
        setHabits = { setHabits }
      />
      <HabitsList
        habits = { habits }
        onDelete = { deleteHabit }
        onToggle = { toggleHabit }
      />
    </>
  )  
}

export default App