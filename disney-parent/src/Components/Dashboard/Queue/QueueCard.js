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
    const request = props.user
    const parks = props.parkState

    if (parks === 'All Parks') {
        return (
            <User user={request}/>
        )
    } else if (parks != request.location) {
        return (
            <UserCard style={{display: 'none'}}>
                <h1>{request.title}</h1>
                <div className="information">
                    <span>{request.full_name}</span>
                    <span>{request.location}</span>
                    <span>{request.meeting_time}</span>
                </div>
            </UserCard>
        )
    }
    else {
        return (
            <User user={request}/>
        )
    } 
}


export default QueueCard;