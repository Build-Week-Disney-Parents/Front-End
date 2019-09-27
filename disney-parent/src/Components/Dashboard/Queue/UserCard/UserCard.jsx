import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from '../User';
import styled from 'styled-components';
import Comment from './AddComment';
import ChatBox from './ChatBox'

const UserCard = styled.div`
    width: 80%;
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


const UserCards = (props) => {
    const request = props.user

    const [chat, setChat] = useState([{
        id: null,
        message: ''
    }])

    // Add Messages
    const addMessage = (message) => {
        const newMessage = {
            id : 4,
            message,
        }
        setChat([...chat, newMessage])
    }

    // Delete Messages
    const delMessage = (id) => {
        setChat([...chat.filter((chat) => (
            chat.id != id
        ))])
    }

  

    return (
     
        <UserCard>
            <h1>{request.title}</h1>
            <div className="information">
                <p>{`Passholder: ${request.full_name}`}</p>
                <p>{`Pass Type: ${request.request_type}`}</p>
                <p>{`Park Permitted: ${request.location}`}</p>
                <p>{`Date Available: ${request.meeting_time}`}</p>
                <p>{request.comment}</p>
            </div>
            <div>
                <ChatBox chat={chat} delMessage={delMessage} />
            </div>
            <div>
                <Comment addMessage={addMessage}/>
            </div>
            
        </UserCard>
    )
    }
    
    
    export default UserCards;