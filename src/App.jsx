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

function HabitsList() {
  const [habits, setHabits] = useState(initialHabits)

  function createNewHabit() {
    setHabits([
      ...habits, {
        name: 'Clean skin',
        status: 'Not done yet :(',
        id: crypto.randomUUID()
      }
    ])
  }

  return (
    <>
      <button onClick={createNewHabit}> Add habit </button>
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
  return (
    <>
      <HabitsList />
    </>
  )  
}

export default App