import React, { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';
import Axios from 'axios';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import SwitchUser from '../SwitchUser';
import QueueCard from './QueueCard';
import User from './User'
import Parks from '../Parks';

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

// const UserCard = styled.div`
//     width: 30%;
//     height: 20vh;
//     background: white;
//     border-radius: 10px;
//     padding: 10px;
//     text-align: center;
//     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
//     margin-top: 20px;

//     transition: all .3s;

//     :hover {
//         transform: translateY(-10px);
//     }
// `






function Queue(props) {

const[users, setUsers] = useState([
    {
        "id": 1,
        "name": "Leanne Graham",
        "email": "Sincere@april.biz",
        "park": "Magic Kingdom",
        "pass": "childcare",
        "time_slot": '1:00 PM'
    
    },
    {
        "id": 2,
        "name": "Roland Walter",
        "email": "rolWalt@gmail.com",
        "park": "Epcot",
        "pass": "stroller",
        "time_slot": '10:20 AM'
    
    },
    {
        "id": 3,
        "name": "Milla Dixon",
        "email": "Dixon344@yahoo.com",
        "park": "Magic Kingdom",
        "pass": "childcare",
        "time_slot": '2:40 PM'
    
    },
    {
        "id": 4,
        "name": "Elena Hopkins",
        "email": "butterfly@shuttle.org",
        "park": "Hollywood Studios",
        "pass": "stroller",
        "time_slot": '12:30 PM'
    
    },
    {
        "id": 5,
        "name": "Harpreet Munoz",
        "email": "wishingwell@indie.biz",
        "park": "Epcot",
        "pass": "childcare",
        "time_slot": '9:15 AM'
    
    },
    {
        "id": 6,
        "name": "Warwick Mac",
        "email": "Mac10@apple.com",
        "park": "Animal Kingdom",
        "pass": "childcare",
        "time_slot": '2:30 PM'
    
    },
    {
        "id": 7,
        "name": "Hal Hamilton",
        "email": "HamSandwhich@jelly.org",
        "park": "Magic Kingdom",
        "pass": "stroller",
        "time_slot": '10:45 AM'
    
    },
    {
        "id": 8,
        "name": "Ellisha Kaur",
        "email": "123free@aol.com",
        "park": "Animal Kingdom",
        "pass": "stroller",
        "time_slot": '6:00 PM'
    
    },
    {
        "id": 9,
        "name": "Leyla Gaines",
        "email": "Gaines@yahoo.org",
        "park": "Hollywood Studios",
        "pass": "childcare",
        "time_slot": '5:35 PM'
    
    },
    {
        "id": 10,
        "name": "Taylah Skinner",
        "email": "skinner@google.org",
        "park": "Epcot",
        "pass": "stroller",
        "time_slot": '11:00 AM'
    
    },
    {
        "id": 11,
        "name": "Nathanael Milne",
        "email": "natedog@travel.org",
        "park": "Hollywood Studios",
        "pass": "stroller",
        "time_slot": '8:45 AM'
    
    },
    {
        "id": 12,
        "name": "Zunairah Hume",
        "email": "ziggy@marley.co",
        "park": "Animal Kingdom",
        "pass": "childcare",
        "time_slot": '1:30 PM'
    
    }
]);

// const onClick = setUsers()


const buttonText = [
    'All Parks',
    'Magic Kingdom',
    'Animal Kingdom',
    'Hollywood Studios',
    'Epcot'
]
// useState for Park nav
const [parkState, setParkState] = useState('All Parks');

// usestate for triggering the animation
const [isToggled, setToggle] = useState(false);

// animation
const fade = useSpring({opacity: 1, from: {opacity: 0}})

    return(
        <section>
            <div>
                <BtnWrapper>
                    {buttonText.map(text => (
                        <Parks key={text.id} text={text} setParkState={setParkState} />
                    ))}
                    <SwitchUser />
                </BtnWrapper>
                
                <UserWrapper style={fade}>
                    {users.map(user => (
                        
                            <QueueCard key={user.id} person={user} parkState={parkState} />
                        
                ))}
                </UserWrapper>
                <Route exact path='/dashboard/users/:id' 
                       render={ (props) => 
                       <User {...props} people={{...users.find(user => user.id == props.match.params.id)}} />} />
            </div>
        </section>
    )
}

export default Queue


