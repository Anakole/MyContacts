import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { MyContactsLink, NavStyle } from './Navigation.styled';
import { VscAccount } from 'react-icons/vsc';

export const Navigation = () => {
  const { isLoggegIn } = useAuth();

  return (
    <NavStyle>
      <MyContactsLink to="/">
        MyContacts
        <VscAccount />
      </MyContactsLink>
      {isLoggegIn && <Link to="/contacts">Contacts</Link>}
    </NavStyle>
  );
};
