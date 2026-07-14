import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router';
import { AuthProvider, useAuth } from './context/AuthContext';
import { api } from './api/client';
import { getTodayDate } from './utils/date';
import ProtectedRoute from './components/ProtectedRoute';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './pages/Dashboard';
import AddHabit from './pages/AddHabit';
import Profile from './pages/Profile';
import Onboarding from './pages/Onboarding';
import HabitDetail from './pages/HabitDetail';

function AppRoutes() {
  const [habits, setHabits] = useState([])
  const [editHabit, setEditHabit] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      setIsLoading(false);
      return;
    }

    async function loadHabits() {
      try {
        setIsLoading(true);
        const today = getTodayDate();

        // 1. Get the base list of habits
        const rawHabits = await api.getHabits();

        // 2. For each habit, fetch its logs and find today's entry
        //    Promise.all runs these in parallel instead of one-by-one
        const habitsWithStatus = await Promise.all(
          rawHabits.map(async (habit) => {
          const logs = await api.getHabitLogs(habit.id);
          const todayLog = logs.find((log) => log.date === today);

            return {
              ...habit,
            status: todayLog?.completed ? 'Done :)' : 'Not done yet :(',
            };
          })
);

        setHabits(habitsWithStatus);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadHabits();
  }, [isAuthenticated]);


  async function toggleHabit(id) {
    const habit = habits.find((h) => h.id === id);
    const newCompleted = habit.status !== 'Done :)'; // flip current state
    const today = getTodayDate();

    // Optimistic update: change the UI immediately...
    setHabits(habits.map((h) => h.id === id
      ? { ...h, status: newCompleted ? 'Done :)' : 'Not done yet :(' }
      : h));

    try {
      // ...then confirm with the backend
      await api.toggleHabitLog(id, today, newCompleted);
    } catch (err) {
      // If the request fails, roll back the UI change
      setHabits(habits.map((h) => h.id === id
        ? { ...h, status: habit.status } // revert to what it was before
        : h));
      setError('Failed to update habit: ' + err.message);
    }
  }

  async function addHabit(habitData) {
    const newHabit = await api.createHabit(
      habitData.name,
      habitData.category,
      habitData.difficulty
    );
    setHabits([...habits, { ...newHabit, status: 'Not done yet :(' }]);
  }

  async function updateHabit(id, habitData) {
    const updated = await api.updateHabit(
      id,
      habitData.name,
      habitData.category,
      habitData.difficulty
    );
    setHabits(habits.map((h) => (h.id === id ? { ...h, ...updated } : h)));
  }

  async function deleteHabit(id) {
    try {
      await api.deleteHabit(id);
      setHabits(habits.filter((habit) => habit.id !== id));
    } catch (err) {
      setError('Failed to delete habit: ' + err.message);
    }
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />

      <Route index element={
        <ProtectedRoute>
          <Dashboard habits={habits} onDelete={deleteHabit} onToggle={toggleHabit} setEditHabit={setEditHabit} />
        </ProtectedRoute>
      }/>
      <Route path="/addHabit" element={
        <ProtectedRoute>
          <AddHabit onAdd={addHabit} onUpdate={updateHabit} editHabit={editHabit} />
        </ProtectedRoute>
      }/>
      <Route path="/profile" element={
        <ProtectedRoute><Profile /></ProtectedRoute>
      }/>
      <Route path="/onboarding" element={
        <ProtectedRoute><Onboarding /></ProtectedRoute>
      }/>
      <Route path="/habit/:id" element={
        <ProtectedRoute><HabitDetail /></ProtectedRoute>
      }/>
    </Routes>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App