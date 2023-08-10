import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #0d130b;
  font-size: 18px;
  background: #5d6061;
  border: 2px solid #dbdfe1;
  border-radius: 8px;
  padding: 10px;
  width: 400px;
  height: 20px;
  margin-top: 5px;
`;

export const FormButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  color: #dbdfe1;
  width: 90px;
  text-transform: uppercase;
  background-color: #32571d;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  margin-top: 10px;

  &:hover,
  &:focus {
    color: #32571d;
    background-color: #8eb936;
  }
`;
