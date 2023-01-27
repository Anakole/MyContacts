import styled from '@emotion/styled';

export const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LogoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  color: #1f260f;
  width: 90px;
  text-transform: uppercase;
  background-color: #828c32;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-weight: 500;

  &:hover,
  &:focus {
    background-color: #f2e963;
  }
`;
