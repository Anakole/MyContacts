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
  color: #1f260f;
  font-size: 18px;
  background: #f2e863b7;
  border: 2px solid #f1edb3;
  border-radius: 8px;
  padding: 10px;
  width: 400px;
  height: 20px;
  margin-top: 5px;
`;

export const FormButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  color: #828c32;
  width: 90px;
  text-transform: uppercase;
  background-color: #1f260f;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-weight: 500;

  &:hover,
  &:focus {
    background-color: #f2e963;
  }
`;
