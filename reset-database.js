import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const DATABASE_URL = process.env.POSTGRES_URL;
if (!DATABASE_URL) throw new Error('DATABASE_URL not defined in .env.local');

const sql = postgres(DATABASE_URL);

(async () => {
  try {
    // Drop the entire schema
    await sql`DROP SCHEMA public CASCADE`;
    // Recreate the schema
    await sql`CREATE SCHEMA public`;

    console.log('Entire database schema reset successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error resetting database:', err);
    process.exit(1);
  }
})();
