import React from 'react'

function Messages(props) {
    return (
        <div>
            <p>{props.chat.message}</p>
            <button onClick={props.delMessage}>Click to Delete</button>
        </div>
    )
}

export default Messages

