import { createFakeContact } from "../../utils/contacts/createFakeContact.js";
import { readContacts } from "../../utils/contacts/readContacts.js";
import { writeContacts } from "../../utils/contacts/writeContacts.js";


export const addOneContact = async () => {
    const contactList = await readContacts();
    const newContact = createFakeContact();
    writeContacts([...contactList, newContact]);
};

addOneContact();
