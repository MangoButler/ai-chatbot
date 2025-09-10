import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const DATABASE_URL = process.env.POSTGRES_URL;
if (!DATABASE_URL) throw new Error('DATABASE_URL not defined in .env.local');

const sql = postgres(DATABASE_URL);

(async () => {
  try {
    // Drop Chat table and all dependent objects
    await sql`DROP TABLE IF EXISTS "Chat" CASCADE;`;

    console.log('Chat table and dependent objects dropped successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error resetting database:', err);
    process.exit(1);
  }
})();
