import React from 'react';
import Login from './Components/Login-Signup/Login';
import Signup from './Components/Login-Signup/Signup';
import Welcome from './Components/Welcome';
import { Route } from 'react-router-dom';
import Queue from './Components/Dashboard/Queue/Queue';
import Volunteer from './Components/Dashboard/Volunteer';
import Disney from './disney.jpg'
import Dashboard from './Components/Dashboard/Dashboard';

function App() {

  
  

  return (
    
    <div className='container'>
      <Welcome />
      <Route exact path='/' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/user-dashboard' component={Queue} />
      <Route path='/volunteer-dashboard' component={Volunteer} />
    </div>
    
    
  )
}

export default App;
