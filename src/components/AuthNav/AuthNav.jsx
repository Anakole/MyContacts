import { AuthBox, AuthLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthBox>
      <AuthLink to="/register">Register</AuthLink>
      <AuthLink to="/login">Log In</AuthLink>
    </AuthBox>
  );
};
