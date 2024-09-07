import fs from 'node:fs/promises';
import { PATH_DB } from '../contacts/contacts.js';

export const removeAllContacts = async () => {
  fs.writeFile(PATH_DB, '[]');
};
removeAllContacts();
