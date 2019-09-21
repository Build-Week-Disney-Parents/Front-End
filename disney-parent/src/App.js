import React from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Welcome from './Components/Welcome';
import { Route } from 'react-router-dom';
import Queue from './Components/QueueList';
import Disney from './disney.jpg'

function App() {

  
  

  return (
    
    <div className='container'>
      <Welcome />
      <Route exact path='/' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/dashboard' component={Queue} />
    </div>
    
    
  )
}

export default App;
