import React from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Welcome from './Components/Welcome';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Parks />
    </div>
    <main>
      <Welcome />
      <Route exact path='/' component={Login} />
      <Route path='/signup' component={Signup} />
    </main>
  )
}

export default App;
