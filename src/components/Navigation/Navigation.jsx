import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggegIn } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggegIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};
