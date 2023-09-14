import { AuthProvider } from './contexts/AuthContext';

import Nav from './components/Nav';
import Article from './components/Article';

function App() {
  return (
    <>
      <AuthProvider>
        <h1>App</h1>

        <Nav />
        <hr />

        <Article />
      </AuthProvider>
    </>
  );
}

export default App;
