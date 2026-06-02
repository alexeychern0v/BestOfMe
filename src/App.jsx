import HabitCard from './components/HabitCard' 
import waterImage from './assets/waterImage.png'
import gymImage from './assets/gymImage.jpg'
import eatImage from './assets/eatImage.jpg'

function HabitsList() {
  const initialHabits = [{
    name: 'Drink 2l of water',
    image: waterImage,
    status: 'Done :)',
    id: 'id1'
  }, {
    name: 'Go to the gym',
    image: gymImage,
    status: 'Not done yet :(',
    id: 'id2'
  }, {
    name: 'Eat 3000 calories',
    image: eatImage,
    status: 'Not done yet :(',
    id: 'id3'
  }]

  function createNewHabit() {
    console.log('button created')
  }

  return (
    <>
      <button onClick={createNewHabit}>Add habit</button>
      {initialHabits.map((initialHabit) => {
        return (
          <HabitCard
            name = {initialHabit.name}
            image = {initialHabit.image}
            status = {initialHabit.status}
            key = {initialHabit.id}
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