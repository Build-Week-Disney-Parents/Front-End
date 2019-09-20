import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { Button } from "semantic-ui-react";
import styled from 'styled-components';

const BtnWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`




function Queue() {
// const[name, email, park, pass, time_slot] = data;
const[users, setUsers] = useState([
    {
        "id": 1,
        "name": "Leanne Graham",
        "email": "Sincere@april.biz",
        "park": "Magic Kingdom",
        "pass": "childcare",
        "time_slot": 1
    
    },
    {
        "id": 2,
        "name": "Roland Walter",
        "email": "rolWalt@gmail.com",
        "park": "Epcot",
        "pass": "stroller",
        "time_slot": 3
    
    },
    {
        "id": 3,
        "name": "Milla Dixon",
        "email": "Dixon344@yahoo.com",
        "park": "Magic Kingdom",
        "pass": "childcare",
        "time_slot": 2
    
    },
    {
        "id": 4,
        "name": "Elena Hopkins",
        "email": "butterfly@shuttle.org",
        "park": "Hollywood Studios",
        "pass": "stroller",
        "time_slot": 5
    
    },
    {
        "id": 5,
        "name": "Harpreet Munoz",
        "email": "wishingwell@indie.biz",
        "park": "Epcot",
        "pass": "childcare",
        "time_slot": 1
    
    },
    {
        "id": 6,
        "name": "Warwick Mac",
        "email": "Mac10@apple.com",
        "park": "Animal Kingdom",
        "pass": "childcare",
        "time_slot": 2
    
    },
    {
        "id": 7,
        "name": "Hal Hamilton",
        "email": "HamSandwhich@jelly.org",
        "park": "Magic Kingdom",
        "pass": "stroller",
        "time_slot": 2
    
    },
    {
        "id": 8,
        "name": "Ellisha Kaur",
        "email": "123free@aol.com",
        "park": "Animal Kingdom",
        "pass": "stroller",
        "time_slot": 6
    
    },
    {
        "id": 9,
        "name": "Leyla Gaines",
        "email": "Gaines@yahoo.org",
        "park": "Hollywood Studios",
        "pass": "childcare",
        "time_slot": 5
    
    },
    {
        "id": 10,
        "name": "Taylah Skinner",
        "email": "skinner@google.org",
        "park": "Epcot",
        "pass": "stroller",
        "time_slot": 1
    
    },
    {
        "id": 11,
        "name": "Nathanael Milne",
        "email": "natedog@travel.org",
        "park": "Hollywood Studios",
        "pass": "stroller",
        "time_slot": 2
    
    },
    {
        "id": 12,
        "name": "Zunairah Hume",
        "email": "ziggy@marley.co",
        "park": "Animal Kingdom",
        "pass": "childcare",
        "time_slot": 5
    
    }
]);

const buttonText = [
    'All Parks',
    'Magic Kingdom',
    'Animal Kingdom',
    'Hollywood Studios',
    'Epcot'
]

const [parkState, setParkState] = useState('All Parks');

console.log(parkState)





    return(
        <section>
            <div>
                <BtnWrapper>
                    {buttonText.map(text => (
                        <Parks key={text.id} text={text} setParkState={setParkState} />
                    ))}
                </BtnWrapper>
                
                {users.map((user) => {
                    return (
                    <QueueCard key={user.id} person={user} parkState={parkState} />
                    ) 
                })}
                
            </div>
        </section>
    )
}

function QueueCard(props) {
    // const[name, email, park, pass, time_slot] = person;
    const people = props.person
    const parks = props.parkState

    if (parks === 'All Parks') {
        return (
            <div >
                <h1>{ people.name }</h1>
                <span>{people.email} {people.park} {people.pass} {people.time_slot} </span>
            </div>
        )
    } else if (parks != people.park) {
        return (
            <div style={{display: 'none'}}>
                <h1>{ people.name }</h1>
                <span>{people.email} {people.park} {people.pass} {people.time_slot} </span>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>{ people.name }</h1>
                <span>{people.email} {people.park} {people.pass} {people.time_slot} </span>
            </div>
        )
    } 
}



function Parks(props) {
    const showText = props.text
        return (
            <div>
                <Button.Group>
                    <Button onClick={() => props.setParkState(showText)}>{showText}</Button>
                </Button.Group>
            </div>
            
        )
    }


export default Queue


