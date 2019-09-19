import React from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import AuthTabNav from './Components/AuthTabNav';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <AuthTabNav />
      <Route path='/' component={Signup} />
      <Route path='/login' component={Login} />
    </div>
  )
}

export default App;
