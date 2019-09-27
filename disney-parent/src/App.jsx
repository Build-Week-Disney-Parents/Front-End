import React, { useState, useEffect } from 'react';
import Login from './Components/Login-Signup/Login';
import Signup from './Components/Login-Signup/Signup';
import Welcome from './Components/Welcome';
import { Route, Switch } from 'react-router-dom';
import Queue from './Components/Dashboard/Queue/Queue';
import Vform from './Components/Dashboard/Volunteer';
import Disney from './disney.jpg'
import User from './Components/Dashboard/Queue/User';
import QueueCard from './Components/Dashboard/Queue/QueueCard'


function App() {
  
  

  return ( 
    
    <div className='container'>
      <Welcome />
      <Route exact path='/' render={props => <Login {...props} />} />
      <Route path='/signup' component={Signup} />
      <Route path='/dashboard' component={Queue} />
      <Route path='/volunteer-dashboard' component={Vform} />
      <Route exact path='/dashboard/users/:id' render={ (props) => <User {...props}  />} />
    </div>
  
  )
}

export default App;
