import { PATH_DB } from '../contacts/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContatcs) => {
  await fs.writeFile(PATH_DB, JSON.stringify(updatedContatcs, null, 2));
};
