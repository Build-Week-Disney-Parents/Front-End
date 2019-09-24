import React from 'react';
import Login from './Components/Login-Signup/Login';
import Signup from './Components/Login-Signup/Signup';
import Welcome from './Components/Welcome';
import { Route } from 'react-router-dom';
<<<<<<< HEAD
import Queue from './Components/Dashboard/Queue/Queue';
import Volunteer from './Components/Dashboard/Volunteer';
=======
import Queue from './Components/QueueList';
import Vform from './Components/Volunteer';
>>>>>>> 8434c33e54b8a92d2b68bd5595c199832ec90bbe
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
      <Route path='/volunteer-dashboard' component={Vform} />
    </div>
  
  )
}

export default App;
