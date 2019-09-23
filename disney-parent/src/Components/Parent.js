<<<<<<< HEAD
import React from "react";
import { Button } from "semantic-ui-react";
import { QueueCard } from "./QueueList";


function Parks({magicKingdom, animalKingdom, hollywoodStudios, epcot}) {

    const mk = magicKingdom.map((user => (
        <QueueCard key={user.id} person={user} />
    )))

    const ak = animalKingdom.map((user => (
        <QueueCard key={user.id} person={user} />
    )))

    const hS = hollywoodStudios.map((user => (
        <QueueCard key={user.id} person={user} />
    )))

    const ep = epcot.map((user => (
        <QueueCard key={user.id} person={user} />
    )))
    

    return(
        <div>
            <h1>Parent View</h1>
            <Button.Group>
                <Button>All Parks</Button>
                <Button onClick={mk}>Magic Kingdom</Button>
                <Button>Animal Kingdom</Button>
                <Button>Hollywood Studios</Button>
                <Button>Epcot</Button>
            </Button.Group>
        </div>
    
    )
}
=======
// import React, { useState, useEffect } from "react";
// import { Button } from "semantic-ui-react";

>>>>>>> 17130e963c835a074171aa7b4ec67baf056de7e5

// // function Parks() {

// //     return (
// //         <div>
// //             <Button.Group>
// //                 <Button>All Parks</Button>
// //                 <Button>Magic Kingdom</Button>
// //                 <Button>Animal Kingdom</Button>
// //                 <Button>Hollywood Studios</Button>
// //                 <Button>Epcot</Button>
// //             </Button.Group>
// //         </div>
        
// //     )
// // }



// // export default Parks
