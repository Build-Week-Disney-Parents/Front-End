import React, { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';
import Axios from 'axios';
import styled from 'styled-components';
import SwitchUser from '../SwitchUser';
import QueueCard from './QueueCard';
import Parks from '../Parks';
import API from '../../../Utilities/API';

const BtnWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const UserWrapper = styled(animated.div)`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 40px;
    
`








const Queue = () => {


    // title, description, meeting_time, request_type, location
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

const [parkState, setParkState] = useState('All Parks');

// usestate for triggering the animation
const [isToggled, setToggle] = useState(false);

console.log(parkState)

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
                       <QueueCard key={user.id} user={user} parkState={parkState} />
                ))}
                </UserWrapper>
            </div>
        </section>
    )
}

export default Queue


