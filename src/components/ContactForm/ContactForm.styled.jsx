import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  padding: 30px;
  margin-bottom: 30px;
  background-color: #182112d1;
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
  color: #182112;
  font-size: 18px;
  background: #5d6061;
  border: 2px solid #dbdfe1;
  border-radius: 8px;
  padding: 10px;
  margin-top: 5px;
  margin-left: 10px;
`;

export const Button = styled.button`
  font-family: 'Montserrat', sans-serif;
  color: #dbdfe1;
  width: 150px;
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
