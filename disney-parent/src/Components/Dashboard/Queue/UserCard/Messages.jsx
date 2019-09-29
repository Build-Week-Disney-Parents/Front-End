import React from 'react';





function Messages(props) {
    console.log(props)
    return (
        <div>
            
            {
            props.chat.message === '' ? 
            <div className='none'>
                <p>{`${props.request.username} says: ${props.chat.message}`}</p>
                <button onClick={props.delMessage}>Click to Delete</button>
            </div> 
            : 
            <div>
                <p>{`${props.request.username} says: ${props.chat.message}`}</p>
                <button onClick={props.delMessage}>Click to Delete</button>
            </div>
        }
        </div>
    )
}    
    
    

export default Messages

