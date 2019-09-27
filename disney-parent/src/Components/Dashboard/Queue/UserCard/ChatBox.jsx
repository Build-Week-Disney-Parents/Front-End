import React from 'react'
import Messages from './Messages'

function ChatBox(props) {
   const chat = props.chat
   const delMessage = props.delMessage

   return (

        <div>
            {chat.map(chat => (
                <Messages key={chat.id} chat={chat} delMessage={delMessage} />
            ))}
        </div>
    )
}

export default ChatBox
