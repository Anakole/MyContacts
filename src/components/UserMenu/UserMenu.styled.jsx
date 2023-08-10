import styled from '@emotion/styled';

export const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #dbdfe1;
  font-size: 20px;
`;

export const LogoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  color: #dbdfe1;
  width: 90px;
  text-transform: uppercase;
  background-color: #32571d;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-weight: 500;

  &:hover,
  &:focus {
    color: #182112;
    background-color: #8eb936;
  }
`;
