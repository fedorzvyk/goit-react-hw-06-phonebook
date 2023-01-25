import { List } from './ContactList.styled';
import ContactListItem from '../ContactListItem/ContactListItem';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {getContacts,getFilter} from 'redux/selectors'


const ContactList = () => {
  const contacts = useSelector(getContacts)
  const filter = useSelector(getFilter)
  const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.value.toLowerCase().trim())
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

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

export default ContactList;
