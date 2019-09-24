import React, { useState } from 'react';
import Queue from './Queue/Queue';

function Dashboard() {

    const[users, setUsers] = useState([
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "park": "Magic Kingdom",
            "pass": "childcare",
            "time_slot": '1:00 PM'
        
        },
        {
            "id": 2,
            "name": "Roland Walter",
            "email": "rolWalt@gmail.com",
            "park": "Epcot",
            "pass": "stroller",
            "time_slot": '10:20 AM'
        
        },
        {
            "id": 3,
            "name": "Milla Dixon",
            "email": "Dixon344@yahoo.com",
            "park": "Magic Kingdom",
            "pass": "childcare",
            "time_slot": '2:40 PM'
        
        },
        {
            "id": 4,
            "name": "Elena Hopkins",
            "email": "butterfly@shuttle.org",
            "park": "Hollywood Studios",
            "pass": "stroller",
            "time_slot": '12:30 PM'
        
        },
        {
            "id": 5,
            "name": "Harpreet Munoz",
            "email": "wishingwell@indie.biz",
            "park": "Epcot",
            "pass": "childcare",
            "time_slot": '9:15 AM'
        
        },
        {
            "id": 6,
            "name": "Warwick Mac",
            "email": "Mac10@apple.com",
            "park": "Animal Kingdom",
            "pass": "childcare",
            "time_slot": '2:30 PM'
        
        },
        {
            "id": 7,
            "name": "Hal Hamilton",
            "email": "HamSandwhich@jelly.org",
            "park": "Magic Kingdom",
            "pass": "stroller",
            "time_slot": '10:45 AM'
        
        },
        {
            "id": 8,
            "name": "Ellisha Kaur",
            "email": "123free@aol.com",
            "park": "Animal Kingdom",
            "pass": "stroller",
            "time_slot": '6:00 PM'
        
        },
        {
            "id": 9,
            "name": "Leyla Gaines",
            "email": "Gaines@yahoo.org",
            "park": "Hollywood Studios",
            "pass": "childcare",
            "time_slot": '5:35 PM'
        
        },
        {
            "id": 10,
            "name": "Taylah Skinner",
            "email": "skinner@google.org",
            "park": "Epcot",
            "pass": "stroller",
            "time_slot": '11:00 AM'
        
        },
        {
            "id": 11,
            "name": "Nathanael Milne",
            "email": "natedog@travel.org",
            "park": "Hollywood Studios",
            "pass": "stroller",
            "time_slot": '8:45 AM'
        
        },
        {
            "id": 12,
            "name": "Zunairah Hume",
            "email": "ziggy@marley.co",
            "park": "Animal Kingdom",
            "pass": "childcare",
            "time_slot": '1:30 PM'
        
        }
    ]);

    return (
        <div>
            <Queue users={users}/>
        </div>
    )
}


export default Dashboard;
