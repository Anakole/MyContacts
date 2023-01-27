import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavStyle = styled.nav`
  font-size: 40px;
  font-family: 'Solitreo', cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  svg {
    font-size: 25px;
    margin-left: 15px;
  }
`;

export const MyContactsLink = styled(NavLink)`
  color: #f1edb3;
`;
