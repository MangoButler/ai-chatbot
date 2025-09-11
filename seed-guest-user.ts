import 'dotenv/config';
import { createGuestUser, saveChat } from './lib/db/queries';
import { generateUUID } from './lib/utils';

async function main() {
  try {
    const guest = await createGuestUser();
    console.log('Guest user created:', guest);

    const chat = await saveChat({
      id: generateUUID(),
      userId: guest[0].id,
      title: 'My First Chat',
      visibility: 'private',
    });
    console.log('Chat created:', chat);
  } catch (err) {
    console.error('Error seeding local DB:', err);
  }
}

main();
