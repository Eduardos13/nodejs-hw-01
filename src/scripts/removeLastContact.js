import fs from 'node:fs/promises';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();

  contacts.splice(-1, 1);

  // POP
  //   contacts.pop();

  // Slice
  // const newArray = contacts.slice(1, contacts.length - 1);
  // await writeContacts(newArray);
  //or
  // contacts.splice(0, -1);

  // Length
  // contacts.length = contacts.length - 1;

  await writeContacts(contacts);
};

removeLastContact();
