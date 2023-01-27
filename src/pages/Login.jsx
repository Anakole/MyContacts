import { LoginForm } from 'components/LoginForm/LoginForm';
import { FormContainer } from './FormContainer.styled';

const Login = () => {
  return (
    <FormContainer>
      <h1>Login</h1>
      <LoginForm />
    </FormContainer>
  );
};

export default Login;
