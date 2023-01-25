import { List } from './ContactList.styled';
import ContactListItem from '../ContactListItem/ContactListItem';

import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { getContacts } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  // console.log(contacts);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <List>
      {visibleContacts.map(({ id, number, name }) => (
        <ContactListItem key={id} id={id} number={number} name={name} />
      ))}
    </List>
  );
};

export default ContactList;
