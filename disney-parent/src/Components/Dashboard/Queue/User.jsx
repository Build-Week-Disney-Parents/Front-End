import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import Comment from './AddComment';

const UserCard = styled.div`
    width: 80%;
    height: 50vh;
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
        <Link to={ `/dashboard/users/${request.id}`}>
        <UserCard>
            <h1>{request.title}</h1>
            <div className="information">
                <span>{request.full_name}</span>
                <span>{request.location}</span>
                <span>{request.meeting_time}</span>
                <p>{request.comment}</p>
            </div>
            <button onClick={() => {
                    if (props.buttonState !== true) {
                        props.setButtonState(true);
                    } else {
                        props.setButtonState(false);
                    }
                }}>Add Comment</button>
            {props.buttonState === false ? <Comment style={{display: 'none'}} /> : <Comment request={request} />}
        </UserCard>
        </Link>

    )
}


export default User;