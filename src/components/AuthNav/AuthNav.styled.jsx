import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const AuthLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  color: #1f260f;
  width: 90px;
  text-transform: uppercase;
  background-color: #828c32;
  padding: 10px;
  border-radius: 8px;
  font-weight: 500;

  &:hover,
  &:focus {
    background-color: #f2e963;
  }
`;
