import { Card, CardContent, Typography } from '@material-ui/core'
import React, { forwardRef } from 'react'

import './Message.css'

const Message = forwardRef(({ message, username }, ref) => {
    const isUser = username === message.username
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <small className="message__userName">{!isUser && `${message.username || 'Unknown User'}`}</small>
            <Card className={isUser ? 'message__userCard' : 'message__guestCard'}>
                <CardContent>
                    <Typography
                        variant="h6"
                        component="h4"
                    >
                        {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>     
    )
})

export default Message
