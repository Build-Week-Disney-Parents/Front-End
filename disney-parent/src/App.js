import React from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Welcome from './Components/Welcome';
import AuthTabNav from './Components/AuthTabNav';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`


function App() {
  return (
    <main>
      <Route path='/' component={Welcome} />
      <AuthTabNav />
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
    </main>
  )
}

export default App;
