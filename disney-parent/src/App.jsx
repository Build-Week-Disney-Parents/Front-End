import React, { useState, useEffect } from 'react';
import Login from './Components/Login-Signup/Login';
import Signup from './Components/Login-Signup/Signup';
import Welcome from './Components/Welcome';
import { Route } from 'react-router-dom';
import Queue from './Components/Dashboard/Queue/Queue';
import Vform from './Components/Dashboard/Volunteer';
import UserCards from './Components/Dashboard/Queue/UserCard/UserCard'
import API from './Utilities/API';


function App() {

  const[users, setUsers] = useState([
    
  ]);
  
  useEffect(() => {
      const getRequests = () => {
          API.get('/requests')
          .then(res => {
              setUsers(res.data)
          })
      }
      getRequests();
  }, []);
  

  return ( 

    <div className='container'>
      <Welcome />
      <Route exact path='/' render={props => <Login {...props} />} />
      <Route path='/signup' render={props => <Signup {...props} />} />
      <Route exact path='/dashboard' render={props => <Queue {...props} users={users} />} />
  <Route path='/volunteer-dashboard' render={props => <Vform {...props} />} />
      <Route exact path='/dashboard/users/:id' 
                       render={ (props) => 
                       <UserCards {...props} 
                              user={{...users.filter(user => user.id === props.match.params.id)}}
                              />} />
    </div>
  
  )
}

export default App;
