
import { readContacts } from "../../utils/contacts/readContacts.js";

export const getAllContacts = () => readContacts();

console.log(await getAllContacts());
