// middleware/validation.js
import { body, validationResult } from 'express-validator';

export const validateRegistration = [
  body('teamName')
    .notEmpty()
    .withMessage('Team name is required')
    .isLength({ min: 3 })
    .withMessage('Team name must be at least 3 characters')
    .trim(),
  
  body('captainName')
    .notEmpty()
    .withMessage('Captain name is required')
    .trim(),
  
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),
  
  body('teamType')
    .isIn(['red', 'blue'])
    .withMessage('Team type must be either red or blue'),
  
  body('teamSize')
    .isInt({ min: 3, max: 5 })
    .withMessage('Team size must be between 3 and 5 members')
    .toInt(),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false,
        errors: errors.array() 
      });
    }
    next();
  }
];