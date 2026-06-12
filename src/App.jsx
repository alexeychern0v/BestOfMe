import { useState } from 'react'
import { Routes, Route } from 'react-router';
import Dashboard from './pages/Dashboard';
import AddHabit from './pages/AddHabit';
import Profile from './pages/Profile';
import Onboarding from './pages/Onboarding';
import HabitDetail from './pages/HabitDetail';

const initialHabits = [{
    name: 'Drink 2l of water',
    status: 'Done :)',
    id: crypto.randomUUID()
  }, {
    name: 'Go to the gym',
    status: 'Not done yet :(',
    id: crypto.randomUUID()
  }, {
    name: 'Eat 3000 calories',
    status: 'Not done yet :(',
    id: crypto.randomUUID()
  }]


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
      <Routes>
        <Route index element={<Dashboard habits = { habits } setHabits = { setHabits } onDelete = { deleteHabit } onToggle = { toggleHabit }/>}/>
        <Route path="/addHabit" element={<AddHabit />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/onboarding" element={<Onboarding />}/>
        <Route path="/habit/:id" element={<HabitDetail />}/>
      </Routes>
  )  
}

export default App