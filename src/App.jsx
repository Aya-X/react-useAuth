import { useState } from 'react';

import { AuthContext } from './contexts/AuthContext';

import Nav from './components/Nav';
import Article from './components/Article';

function App() {
  const [token, setToken] = useState('');

  return (
    <>
      <AuthContext.Provider value={{ token, setToken }}>
        <h1>App</h1>

        <Nav />
        <hr />

        <Article />
      </AuthContext.Provider>
    </>
  );
}

export default App;
