// models/Registration.js
import prisma from '../database/db.js';

export class Registration {
  // Create new registration
  static async create(registrationData) {
    const { teamName, captainName, email, teamType, teamSize, teamMembers } = registrationData;
    
    // Convert teamSize to number and teamType to uppercase
    const teamSizeNumber = parseInt(teamSize, 10);
    const normalizedTeamType = teamType.toUpperCase();
    
    return await prisma.registration.create({
      data: {
        teamName,
        captainName,
        email,
        teamType: normalizedTeamType,
        teamSize: teamSizeNumber,
        teamMembers: teamMembers || []
      }
    });
  }

  // Find registration by team name
  static async findByTeamName(teamName) {
    return await prisma.registration.findUnique({
      where: { teamName }
    });
  }

  // Find registration by email
  static async findByEmail(email) {
    return await prisma.registration.findUnique({
      where: { email }
    });
  }

  // Get all registrations
  static async findAll() {
    return await prisma.registration.findMany({
      orderBy: { registrationDate: 'desc' }
    });
  }

  // Find registration by ID
  static async findById(id) {
    return await prisma.registration.findUnique({
      where: { id: parseInt(id) }
    });
  }

  // Get registration statistics
  static async getStats() {
    const total = await prisma.registration.count();
    const redCount = await prisma.registration.count({
      where: { teamType: 'RED' }
    });
    const blueCount = await prisma.registration.count({
      where: { teamType: 'BLUE' }
    });

    return {
      totalRegistrations: total,
      redTeamCount: redCount,
      blueTeamCount: blueCount,
      teamDistribution: {
        red: total > 0 ? Math.round((redCount / total) * 100) : 0,
        blue: total > 0 ? Math.round((blueCount / total) * 100) : 0
      }
    };
  }

  // Update registration status
  static async updateStatus(id, status) {
    return await prisma.registration.update({
      where: { id: parseInt(id) },
      data: { status: status.toUpperCase() }
    });
  }

  // Delete registration
  static async delete(id) {
    return await prisma.registration.delete({
      where: { id: parseInt(id) }
    });
  }
}