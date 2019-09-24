import React from 'react';
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


function User(props) {
    return (
        <UserCard>
            <h1>{props.people.pass}</h1>
            {/* <span>{props.people.email} {props.people.park} {props.people.pass} {props.people.time_slot} </span> */}
            <p>{`Location: ${props.people.park}`}</p>
            <p>{`Avalailable for ${props.people.time_slot}`}</p>
            <p>{`Name: ${props.people.name}`}</p>
            <p>{`Email: ${props.people.email}`}</p>
        </UserCard>
    )
}


export default User;