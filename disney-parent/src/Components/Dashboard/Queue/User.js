import React from 'react';
import styled from 'styled-components';


const UserCard = styled.div`
    width: 30%;
    height: auto;
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
    const request = props.user

    return (
        <UserCard>
            <h1>{request.title}</h1>
            <div className="information">
                <span>{request.full_name}</span>
                <span>{request.location}</span>
                <span>{request.meeting_time}</span>
            </div>
        </UserCard>
    )
}


export default User;