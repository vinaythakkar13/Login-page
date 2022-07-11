import React, {lazy} from 'react';
import './App.scss';

const Login = lazy(() => import('./Login/Login'));

function App() {
  return (
    <div className="App">
        <Login/>
    </div>
  );
}

export default App;
