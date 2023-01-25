import { Button } from 'commonStyles/coommonStyles.styled';
import { Item, ItemName } from './ContactListItem.styled';
import { FaPhoneAlt, FaUserAlt, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactListItem = ({ id, number, name, onDelete }) => {

  const dispatch = useDispatch();

  return (
    <Item key={id}>
      <ItemName>
        <FaUserAlt fill="orange" /> {name}:
      </ItemName>
      <span>
        <FaPhoneAlt fill="orange" /> {number}
      </span>
      <Button
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        <FaTrash /> Delete
      </Button>
    </Item>
  );
};

export default ContactListItem;
