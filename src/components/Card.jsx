import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function Card() {
  const { token } = useContext(AuthContext);

  return (
    <>
      <p>
        <b>Card</b>
      </p>

      <p>token::: {token}</p>
    </>
  );
}
export default Card;
