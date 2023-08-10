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
  color: #dbdfe0;
  background-color: #182112e1;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const Button = styled.button`
  font-family: 'Montserrat', sans-serif;
  color: #dbdfe0;
  width: 40px;
  font-size: 20px;
  text-transform: uppercase;
  background-color: #32571d;
  padding: 8px;
  border: none;
  border-radius: 8px;
  font-weight: 500;

  &:hover,
  &:focus {
    color: #182112;
    background-color: #8eb936;
  }
`;
