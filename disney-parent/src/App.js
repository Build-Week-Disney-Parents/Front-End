import React from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Welcome from './Components/Welcome';
import { Route } from 'react-router-dom';
import Queue from './Components/QueueList';
import Volunteer from './Components/Volunteer';
import Disney from './disney.jpg'

function App() {

  
  

  return ( 
    
    <div className='container'>
      <Welcome />
      <Route exact path='/' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/user-dashboard' component={Queue} />
      <Route path='/volunteer-dashboard' component={Volunteer} />
    </div>
  
  )
}

export default App;
