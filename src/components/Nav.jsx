import { useAuth } from '../hooks/useAuth';

function Nav() {
  const { setToken } = useAuth();

  return (
    <nav>
      <p>
        <b>Nav</b>
      </p>

      <button type='button' onClick={() => setToken('123')}>
        LOGIN
      </button>

      <span> </span>

      <button type='button' onClick={() => setToken('')}>
        LOGOUT
      </button>
    </nav>
  );
}

export default Nav;
