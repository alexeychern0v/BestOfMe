import HabitCard from './components/HabitCard' 
import waterImage from './assets/waterImage.png'

function App() {
  return (
    <HabitCard
      habit = {{
        name: 'Drink 2l of water',
        image: waterImage,
        completedStatus: 'Completed'
      }}
    />
  )
}

export default App
