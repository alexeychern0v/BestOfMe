const BASE_URL = import.meta.env.VITE_API_URL;

// Generic request wrapper — every API call goes through this function
async function request(endpoint, options = {}) {
  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // Attach the JWT if we have one — backend's verifyToken middleware expects this
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  // Try to parse JSON regardless of status, since our backend sends
  // error messages as JSON too (e.g. { error: "Invalid credentials" })
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    // Throw so calling code can catch it in a try/catch
    throw new Error(data?.error || `Request failed with status ${response.status}`);
  }

  return data;
}

export const api = {
  register: (email, password) =>
    request('/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  login: (email, password) =>
    request('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  getHabits: () => request('/habits'),

  // Full history for one habit
  getHabitLogs: (habitId) => request(`/habits/${habitId}/logs`),

  // Create or update today's (or any date's) completion status
  toggleHabitLog: (habitId, date, completed) =>
    request(`/habits/${habitId}/logs`, {
      method: 'POST',
      body: JSON.stringify({ date, completed }),
    }),

  createHabit: (name, category, difficulty) =>
    request('/habits', {
      method: 'POST',
      body: JSON.stringify({ name, category, difficulty }),
    }),

  updateHabit: (id, name, category, difficulty) =>
    request(`/habits/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, category, difficulty }),
    }),

  deleteHabit: (id) =>
    request(`/habits/${id}`, {
      method: 'DELETE',
    }),
};