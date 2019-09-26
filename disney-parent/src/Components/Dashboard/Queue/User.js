import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';

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



// const User = (props) => {

//     return (
//         <Link to={`/dashboard/users/${props.people.id}`}>
//             <UserCard>
//                 <h1>{props.people.pass}</h1>
//                 {/* <span>{props.people.email} {props.people.park} {props.people.pass} {props.people.time_slot} </span> */}
//                 <p>{`Location: ${props.people.park}`}</p>
//                 <p>{`Avalailable for ${props.people.time_slot}`}</p>
//                 <p>{`Name: ${props.people.name}`}</p>
//                 <p>{`Email: ${props.people.email}`}</p>
//             </UserCard>
//         </Link>

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