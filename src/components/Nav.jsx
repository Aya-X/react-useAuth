import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function Nav() {
  const { setToken } = useContext(AuthContext);

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
