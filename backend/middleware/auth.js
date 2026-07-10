import jwt from 'jsonwebtoken';

// Middleware that verifies JWT token before allowing access
export function verifyToken(req, res, next) {
    // Get Authorization header ("Bearer <token>")
    const authHeader = req.headers['authorization'];
    // Extract only the token part
    const token = authHeader && authHeader.split(' ')[1];
    
    // Reject request if no token is provided
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    try {
        // Verify token signature and expiration
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Store authenticated user's id for future route handlers
        req.userId = decoded.userId;
        next();
    } catch (err) {
        return res.status(403).json({ error: 'Invalid or expired token' });
    }
}