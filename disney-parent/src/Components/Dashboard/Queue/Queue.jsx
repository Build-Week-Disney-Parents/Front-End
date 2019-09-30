import React, { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import SwitchUser from '../SwitchUser';
import QueueCard from './QueueCard';
import UserCards from './UserCard/UserCard'
import Parks from '../Parks';
import API from '../../../Utilities/API';


const BtnWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const UserWrapper = styled(animated.div)`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 20px;
    
`


function Queue(props) {
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


const buttonText = [
    'All Parks',
    'Magic Kingdom',
    'Animal Kingdom',
    'Hollywood Studios',
    'Epcot'
]
// useState for Park nav
const [parkState, setParkState] = useState('All Parks');
const [buttonState, setButtonState] = useState(false);



// animation
const fade = useSpring({opacity: 1, from: {opacity: 0}})

    return(
        <section>
            <div>
                <BtnWrapper>
                    {buttonText.map(text => (
                        <Parks key={text.id} text={text} setParkState={setParkState} user={users} />
                    ))}
                <SwitchUser />
                </BtnWrapper>
                
                <UserWrapper style={fade}>
                    {users.map(user => (
                     <QueueCard key={user.id} user={user} parkState={parkState} buttonState={buttonState} setButtonState={setButtonState} />
                ))}
                </UserWrapper>
                {/* <Route exact path='/dashboard/users/:id' 
                       render={ (props) => 
                       <UserCards {...props} 
                              user={{...users.filter(user => user.id === props.match.params.id)}}
                              buttonState={buttonState}
                              setButtonState={setButtonState}/>} 
                              users={users}
                              
                              /> */}
            </div>
        </section>
    )
}

export default Queue


