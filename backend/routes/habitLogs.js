import express from 'express';
import pool from '../db.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// POST /api/habits/:id/logs — complete / incomplete habit
router.post('/:id/logs', verifyToken, async (req, res) => {
  const { id } = req.params; // habit_id
  const { date, completed } = req.body;

  try {
    // check if the habit belongs to user
    const habitCheck = await pool.query(
      'SELECT * FROM habits WHERE id = $1 AND user_id = $2',
      [id, req.userId]
    );
    if (habitCheck.rows.length === 0) {
      return res.status(404).json({ error: 'Habit not found' });
    }

    const result = await pool.query(
      `INSERT INTO habit_logs (habit_id, date, completed) 
       VALUES ($1, $2, $3) 
       ON CONFLICT (habit_id, date) 
       DO UPDATE SET completed = $3
       RETURNING *`,
      [id, date, completed]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/habits/:id/logs — habit history
router.get('/:id/logs', verifyToken, async (req, res) => {
  const { id } = req.params;

  try {
    const habitCheck = await pool.query(
      'SELECT * FROM habits WHERE id = $1 AND user_id = $2',
      [id, req.userId]
    );
    if (habitCheck.rows.length === 0) {
      return res.status(404).json({ error: 'Habit not found' });
    }

    const result = await pool.query(
      'SELECT * FROM habit_logs WHERE habit_id = $1 ORDER BY date DESC',
      [id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;