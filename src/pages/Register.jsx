import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { FormContainer } from './FormContainer.styled';

const Register = () => {
  return (
    <FormContainer>
      <h1>Registration</h1>
      <RegisterForm />
    </FormContainer>
  );
};

export default Register;
