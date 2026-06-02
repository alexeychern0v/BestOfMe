import HabitCard from './components/HabitCard' 
import waterImage from './assets/waterImage.png'
import gymImage from './assets/gymImage.jpg'
import eatImage from './assets/eatImage.jpg'

const initialHabits = [{
  name: 'Drink 2l of water',
  image: waterImage,
  status: 'Done :)'
}, {
  name: 'Go to the gym',
  image: gymImage,
  status: 'Not done yet :('
}, {
  name: 'Eat 3000 calories',
  image: eatImage,
  status: 'Not done yet :('
}]

const initialHabitsComponents = initialHabits.map((initialHabit) => {
  return (
    <HabitCard
      name = {initialHabit.name}
      image = {initialHabit.image}
      status = {initialHabit.status}
    />
  )
})

function App() {
    return (
      <>
        {initialHabitsComponents}
      </>
    )

}

export default App
