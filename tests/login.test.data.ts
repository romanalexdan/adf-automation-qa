import { random } from 'faker';
export const credentials = { username: 'guest@example.com', password: 'Password' }

export const folderName = `romanalexdan${random.word()}`;
export const folderDescription = `romanalexdan ${random.words(5)}`;

export const existingFolderName = `${random.word()}`;