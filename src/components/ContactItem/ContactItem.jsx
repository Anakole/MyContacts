import { deleteContact } from 'redux/contacts/operations';
import { Button } from '../ContactList/ContactList.styled';
import { ContactName, ContactTel } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { RiDeleteBinLine } from 'react-icons/ri';

export const ContactsItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ContactName>{name}</ContactName>
      <ContactTel href="tel:{number}">{number}</ContactTel>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        <RiDeleteBinLine />
      </Button>
    </>
  );
};
