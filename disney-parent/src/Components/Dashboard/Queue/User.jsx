import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const UserCard = styled.div`
    width: 500px;
    height: 20vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
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
    console.log(props)

    return (
        <Link to={ `/dashboard/users/${request.id}`} style={{color: 'black'}} users={request}>
        <UserCard>
            <h1>{request.title}</h1>
            <div className="information">
                <p>{`Name: ${request.full_name}`}</p>
                <p>{`Location: ${request.location}`}</p>
                <p>{`Date: ${request.meeting_time}`}</p>
                <p>{request.comment}</p>
            </div>
        </UserCard>
        </Link>

    )
}


export default User;