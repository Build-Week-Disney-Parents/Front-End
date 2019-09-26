import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User';
import styled from 'styled-components';

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


const UserCards = ({pass, park, time_slot, name, email}) => {
    
        return (
            <div>
              <UserCard >
                <h1>{pass}</h1>
                {/* <span>{props.people.email} {props.people.park} {props.people.pass} {props.people.time_slot} </span> */}
                <p>{`Location: ${park}`}</p>
                <p>{`Avalailable for ${time_slot}`}</p>
                <p>{`Name: ${name}`}</p>
                <p>{`Email: ${email}`}</p>
            </UserCard>
            </div>
        )
    }
    
    
    export default UserCard;