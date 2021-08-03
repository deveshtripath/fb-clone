import React, { useEffect, useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
// import axios from './axios'
// import Pusher from 'pusher-js'

import db from './firebase'

const Feed = () => {
    // const [profilePic, setProfilePic] = useState('')
    const [postsData, setPostsData] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot) => (
            setPostsData(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ))
    }, [])

    return (
        <div className='feed' >
            <StoryReel />
            <MessageSender />

            {
                postsData.map((post) => (
                    <Post
                        key={post.id}
                        profilePic={post.profilePic}
                        message={post.message}
                        timestamp={post.timestamp}
                        image={post.image}
                        username={post.username}
                    />
                ))
            }
        </div>
    )
}

export default Feed