import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; 
    
    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, '123'); 
                
        req.user = decoded; 
        next();
    } catch (error) {
        return res.status(400).json({ error: 'Invalid token.' });
    }
};

export default verifyToken;