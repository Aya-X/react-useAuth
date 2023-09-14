import Card from './Card';

function Article(props) {
  const { token } = props;

  return (
    <>
      <p>
        <b>Article</b>
      </p>

      <hr />

      <Card token={token}/>
    </>
  );
}

export default Article;
