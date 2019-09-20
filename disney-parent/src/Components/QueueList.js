import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Parks from "./Parent";




function Queue(props) {
// const[name, email, park, pass, time_slot] = data;
console.log(props)
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

const magicKingdom = users.filter(user => {
    return user.park === "Magic Kingdom"
})
const animalKingdom = users.filter(user => {
    return user.park === "Animal Kingdom"
})
const hollywoodStudios = users.filter(user => {
    return user.park === "Hollywood Studios"
})
const epcot = users.filter(user => {
    return user.park === "Epcot"
})


    return(
        <section>
            <div>
                <Parks animalKingdom={animalKingdom} epcot={epcot} hollywoodStudios={hollywoodStudios} magicKingdom={magicKingdom}/>
                {users.map(user => (
                    <QueueCard key={user.id} person={user} />
                ))}
            </div>
        </section>
    )
}

function QueueCard(props) {
    // const[name, email, park, pass, time_slot] = person;
    const people = props.person

    return(
        <div>
            <h1>{ people.name }</h1>
            <span>{people.email} {people.park} {people.pass} {people.time_slot} </span>
        </div>
    )
}
export default { QueueCard }

