import HabitCard from './components/HabitCard' 
import waterImage from './assets/waterImage.png'
import gymImage from './assets/gymImage.jpg'
import eatImage from './assets/eatImage.jpg'


function App() {
  return (
    <div>
      <HabitCard
        habit = {{
          name: 'Drink 2l of water',
          image: waterImage,
          status: 'Done :)'
        }}
      />
      <HabitCard
        habit = {{
          name: 'Go to the gym',
          image: gymImage,
          status: 'Not done yet :('
        }}
      />
      <HabitCard
        habit = {{
          name: 'Eat 3000 calories',
          image: eatImage,
          status: 'Not done yet :('
        }}
      />
    </div>
  )
}

export default App
