import { readContacts } from "../../utils/contacts/readContacts.js";



const countContacts = async () => {
    const contacts = await readContacts();
    return contacts.length;
 };

console.log(await countContacts());
