import React from 'react'
import Stories from '../stories/Stories'

import ShowPost from '../../showpost/ShowPost'
import Create from '../create/Create'
import ChatBar from '../chatbar/ChatBar'

export default function Post() {
    return (
        <div className='post'>
            <Stories />
            <Create />
            <ShowPost />
            <ChatBar />
        </div>
    )
}
