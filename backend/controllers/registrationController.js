// controllers/registrationController.js
import { Registration } from '../models/Registration.js';

// Create new registration
export const createRegistration = async (req, res) => {
  try {
    const { teamName, captainName, email, teamType, teamSize, teamMembers } = req.body;

    // Check if team name already exists
    const existingTeam = await Registration.findByTeamName(teamName);
    if (existingTeam) {
      return res.status(409).json({ 
        success: false,
        error: 'Team name already exists. Please choose a different name.' 
      });
    }

    // Check if email already registered
    const existingEmail = await Registration.findByEmail(email);
    if (existingEmail) {
      return res.status(409).json({ 
        success: false,
        error: 'Email already registered. Please use a different email.' 
      });
    }

    const registration = await Registration.create({
      teamName,
      captainName,
      email,
      teamType,
      teamSize,
      teamMembers
    });

    res.status(201).json({
      success: true,
      message: 'Registration successful! Welcome to Cyber Clash!',
      data: registration
    });
  } catch (error) {
    console.error('Registration error:', error);
    
    // Handle Prisma unique constraint errors
    if (error.code === 'P2002') {
      return res.status(409).json({
        success: false,
        error: 'Team name or email already exists.'
      });
    }

    res.status(500).json({ 
      success: false,
      error: 'Internal server error. Please try again later.' 
    });
  }
};

// Get all registrations (for admin purposes)
export const getRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.findAll();
    res.json({
      success: true,
      count: registrations.length,
      data: registrations
    });
  } catch (error) {
    console.error('Get registrations error:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch registrations' 
    });
  }
};

// Get registration by ID
export const getRegistrationById = async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id);
    if (!registration) {
      return res.status(404).json({ 
        success: false,
        error: 'Registration not found' 
      });
    }
    res.json({
      success: true,
      data: registration
    });
  } catch (error) {
    console.error('Get registration error:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch registration' 
    });
  }
};

// Get registration statistics
export const getRegistrationStats = async (req, res) => {
  try {
    const stats = await Registration.getStats();
    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch registration statistics' 
    });
  }
};

// Update registration status
export const updateRegistrationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['PENDING', 'CONFIRMED', 'CANCELLED'].includes(status?.toUpperCase())) {
      return res.status(400).json({
        success: false,
        error: 'Invalid status. Must be PENDING, CONFIRMED, or CANCELLED.'
      });
    }

    const updated = await Registration.updateStatus(id, status);
    res.json({
      success: true,
      message: `Registration status updated to ${status}`,
      data: updated
    });
  } catch (error) {
    console.error('Update status error:', error);
    
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        error: 'Registration not found'
      });
    }

    res.status(500).json({
      success: false,
      error: 'Failed to update registration status'
    });
  }
};