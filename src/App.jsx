import { useState } from 'react';

import Nav from './components/Nav';
import Article from './components/Article';

function App() {
  const [token, setToken] = useState('');

  return (
    <>
      <h1>App</h1>

      <Nav setToken={setToken}/>
      <hr />

      <Article token={token}/>
    </>
  );
}

export default App;
