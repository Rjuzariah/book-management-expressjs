import { Request, Response, NextFunction } from 'express';

// Create a higher-order function for the auth middleware
const authMiddleware = (expectedToken: string) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers['authorization'];

    // Check if the provided token matches the expected token
    if (token === expectedToken) {
      next(); // Call next() if authenticated
    } else {
      res.status(401).json({ message: 'Unauthorized' }); // Send unauthorized response
    }
  };
};

export default authMiddleware;
