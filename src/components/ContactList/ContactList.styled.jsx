import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 370px;
  padding: 10px 20px;
  color: #1f260f;
  background-color: #f2e863b7;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const Button = styled.button`
  font-family: 'Montserrat', sans-serif;
  color: #1f260f;
  width: 40px;
  font-size: 20px;
  text-transform: uppercase;
  background-color: #818c32c5;
  padding: 8px;
  border: none;
  border-radius: 8px;
  font-weight: 500;

  &:hover,
  &:focus {
    background-color: #f2e963;
  }
`;
