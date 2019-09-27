import React from 'react'

function Messages(props) {
    return (
        <div>
            <p>{props.chat.message}</p>
        </div>
    )
}

export default Messages

