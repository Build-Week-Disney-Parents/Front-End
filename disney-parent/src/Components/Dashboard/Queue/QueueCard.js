import React from 'react';
import User from './User';
import styled from 'styled-components';


const UserCard = styled.div`
    width: 30%;
    height: 20vh;
    background: white;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    margin-top: 20px;

    transition: all .3s;

    :hover {
        transform: translateY(-10px);
    }
`

function QueueCard(props) {
    // const[name, email, park, pass, time_slot] = person;
    const people = props.person
    const parks = props.parkState

    if (parks === 'All Parks') {
        return (
            <User people={people}/>
        )
    } else if (parks != props.person.park) {
        return (
            <UserCard style={{display: 'none'}}>
                <h1>{ people.name }</h1>
                <span>{people.email} {people.park} {people.pass} {people.time_slot} </span>
            </UserCard>
        )
    }
    else {
        return (
            <User people={people}/>
        )
    } 
}


export default QueueCard;