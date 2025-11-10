import express from 'express';
import {
  createRegistration,
  getRegistrations,
  getRegistrationById,
  getRegistrationStats,
  updateRegistrationStatus
} from '../controllers/registrationController.js';
import { validateRegistration } from '../middleware/validation.js';

const router = express.Router();

// POST /api/registrations - Create new registration
router.post('/', validateRegistration, createRegistration);

// GET /api/registrations - Get all registrations
router.get('/', getRegistrations);

// GET /api/registrations/stats - Get registration statistics
router.get('/stats', getRegistrationStats);

// GET /api/registrations/:id - Get registration by ID
router.get('/:id', getRegistrationById);

// PATCH /api/registrations/:id/status - Update registration status
router.patch('/:id/status', updateRegistrationStatus);

export default router;