import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    const randomRemoveContacts = contacts.filter(() => Math.random() > 0.5);
    await fs.writeFile(PATH_DB, JSON.stringify(randomRemoveContacts));
    console.log(`Successful operation. Remove some contacts.`);
  } catch (err) {
    console.error('Incorect data', err);
  }
};

await thanos();
