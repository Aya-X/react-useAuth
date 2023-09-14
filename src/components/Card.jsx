import { useAuth } from '../hooks/useAuth';

function Card() {
  const { token } = useAuth();

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
