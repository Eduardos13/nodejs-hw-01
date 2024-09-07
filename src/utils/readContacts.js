import { PATH_DB } from '../contacts/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  const contacts = await fs.readFile(PATH_DB);
  return JSON.parse(contacts);
};
