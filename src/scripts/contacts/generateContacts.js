import { createFakeContact } from '../../utils/contacts/createFakeContact.js';
import { readContacts } from '../../utils/contacts/readContacts.js';
import { writeContacts } from '../../utils/contacts/writeContacts.js';


const generateContacts = async (number) => {
    const contactList = await readContacts();
    const newContact = Array(number).fill(0).map(createFakeContact);
    await writeContacts([...contactList, ...newContact]);
};

generateContacts(5);





