import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { useAuth } from '../context/AuthContext.jsx';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop the browser from doing a full page reload
    setError('');
    setIsSubmitting(true);

    try {
      await register(email, password);
      navigate('/'); // redirect after successful registration
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>One step closer to your better life</h2>
        {error && <p className="auth-error">{error}</p>}

        <form className="form-page" style={{ padding: 0 }} onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              id="email"
              className="form-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              id="password"
              className="form-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>

          <button className="btn-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Loading...' : "Create account"}
          </button>
        </form>

        <p className="auth-switch">
          Already with us? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}