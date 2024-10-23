import { PATH_DB } from '../constants/contacts.js';
import { readFile } from 'node:fs/promises';

export const readContacts = async () => {
  const res = await readFile(PATH_DB, 'utf8');
  return JSON.parse(res);
};
