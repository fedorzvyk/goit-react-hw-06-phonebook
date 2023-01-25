import { List } from './ContactList.styled';
import ContactListItem from '../ContactListItem/ContactListItem';

import { useSelector } from 'react-redux';
import {getContacts,getFilter} from 'redux/selectors'


const ContactList = () => {
  const {contacts} = useSelector(getContacts)
  const filter = useSelector(getFilter)
 
  const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
    
  return (
    <List>
      {visibleContacts.map(({ id, number, name }) => (
        <ContactListItem
          key={id}
          id={id}
          number={number}
          name={name}
        />
      ))}
    </List>
  );
};

export default ContactList;
