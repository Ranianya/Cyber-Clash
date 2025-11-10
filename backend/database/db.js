// database/db.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Test connection
export const testConnection = async () => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    console.log('✅ Connected to MySQL database with Prisma');
    return true;
  } catch (error) {
    console.error('❌ Database connection error:', error.message);
    return false;
  }
};

export default prisma;