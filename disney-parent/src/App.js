import React from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Welcome from './Components/Welcome';
import AuthTabNav from './Components/Tab/AuthTabNav';
import { Route } from 'react-router-dom';


function App() {
  return (
    <main>
      <AuthTabNav />
      <Route path='/' component={Welcome} />
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
    </main>
  )
}

export default App;
