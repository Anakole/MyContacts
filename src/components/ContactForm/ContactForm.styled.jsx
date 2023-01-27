import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  padding: 30px;
  margin-bottom: 30px;
  background-color: #1f260f;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 250px;
  height: 20px;

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
  margin-top: 5px;
  margin-left: 10px;
`;

export const Button = styled.button`
  font-family: 'Montserrat', sans-serif;
  color: #1f260f;
  width: 150px;
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
