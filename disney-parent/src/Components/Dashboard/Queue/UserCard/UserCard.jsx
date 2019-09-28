import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Comment from './AddComment';
import ChatBox from './ChatBox';
import { Link } from 'react-router-dom';
import {primary1} from '../../../Styles';
import API from '../../../../Utilities/API';

const UserCard = styled.div`
        width: 80%;
        height: auto;
        background: white;
        border-radius: 10px;
        padding: 10px;
        text-align: center;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
        margin: 0 auto;
    `

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s ease-in-out;
    background: ${primary1};
    height: 50px;
    width: 200px;
    border-radius: 10px;
    margin-bottom: 40px;

    :hover {
        transform: scale(1.1)
    }
`
const StyledLink = styled(Link)`
    font-size: 1.2rem;
    color: white;

    :hover {
        color: white;
    }
`


const UserCards = (props) => {
    const request = props.user
    console.log(props)
    const requestID = props.match.params.id;

    const [chat, setChat] = useState([])

    // Add Messages
    const addMessage = (message) => {
        const newMessage = {
            id : message.id,
            message,
        }
        setChat([...chat, newMessage])
    }

    // Delete Messages
    const delMessage = (id) => {
        setChat([...chat.filter((chat) => (
            chat.id === id
        ))])
    }

    useEffect(() => {
        const getComments = () => {
            API.get(`/comments/${requestID}`)
            .then(res => {
                //setChat(res.data.comment)
                setChat(res.data)
            })
            getComments();
        }
    }, [])

  

    return (

        <div>
            <StyledDiv>
                <StyledLink to='/dashboard'>Back to User</StyledLink>
            </StyledDiv>
            <UserCard>
            <h1>{request.title}</h1>
                <div className="information">
                    <p>{`Passholder: ${request.full_name}`}</p>
                    <p>{`Pass Type: ${request.request_type}`}</p>
                    <p>{`Park Permitted: ${request.location}`}</p>
                    <p>{`Date Available: ${request.meeting_time}`}</p>
                    <p>{chat}</p>
                </div>
            <div>
                <ChatBox request={request} chat={chat} delMessage={delMessage} userID={props.match.params.id}/>
            </div>
                <Comment requestID={props.match.params.id} />
        </UserCard>
        </div>
     
        
    )
    }
    
    
    export default UserCards;