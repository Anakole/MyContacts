import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthBox = styled.div`
  display: flex;
  gap: 25px;
`;

export const AuthLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  color: #dbdfe1;
  width: 90px;
  text-transform: uppercase;
  background-color: #32571d;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #95c73e;
    color: #32571d;
  }
`;
