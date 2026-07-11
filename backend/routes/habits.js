import express from 'express';
import pool from '../db.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// GET /api/habits — all current user's habits
router.get('/', verifyToken, async(req, res) =>{
    try {
        const result = await pool.query(
            'SELECT * FROM habits WHERE user_id = $1 ORDER BY created_at DESC',
            [req.userId]
        );
        res.json(result.rows);
    } catch(err) {
        res.status(500).json({ error: 'Server error' })
    }
});

// POST /api/habits — create new user's habit
router.post('/', verifyToken, async(req, res) => {
    const { name, category, difficulty } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'Name is required!' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO habits (user_id, name, category, difficulty) VALUES ($1, $2, $3, $4) RETURNING *',
            [req.usedId, name, category, difficulty]
        );
        res.status(201).json(result.rows[0]);
    } catch(err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// PUT /api/habits/:id — edit user's habit with specific ID
router.put('/:id', verifyToken, async(req, res) => {
    const { id } = req.params;
    const { name, category, difficulty } = req.body;

    try {
        const check = await pool.query(
            'SELECT * FROM habits WHERE id = $1 AND user_id = $2',
            [id, req.userId]
        );
        if (check.rows.length === 0) {
            return res.status(404).json({ error: 'Habit not found' })
        }

        const result = await pool.query(
            'UPDATE habits SET name = $1, category = $2, difficulty = $3 WHERE id = $4 RETURNING *',
            [name, category, difficulty, id]
        );
        res.json(result.rows[0]);   
    } catch(err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// DELETE /api/habits/:id — delete user's habit with specific ID
router.delete('/:id', verifyToken, async(req, res) => {
    const { id } = req.params

    try {
        const result = await pool.query(
            'DELETE FROM habits where id = $1 AND user_id = $2 RETURNING *',
            [id, req.userId]
        );

        if (result.rows.length === 0) {
            return  res.status(404).json({ error: 'Habit not found' })
        }
        res.json({ message: 'Habit deleted' });
    } catch(err) {
        res.status(500).json({ error: 'Server error' })
    }
});

export default router