import React from 'react'
import Messages from './Messages'

function ChatBox(props) {
   const chat = props.chat
   const delMessage = props.delMessage
   const request = props.request

   return (

        <div>
            {chat.map(chat => (
                <Messages key={chat.id} chat={chat} delMessage={delMessage} request={request} />
            ))}
        </div>
    )
}

export default ChatBox
