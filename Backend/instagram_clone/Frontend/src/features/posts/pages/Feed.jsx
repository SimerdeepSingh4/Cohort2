import React, { useEffect } from 'react'
import "../style/feed.scss"
import Post from '../components/Post'
import { usePost } from '../hook/usePost'
const Feed = () => {
  const { loading, Feed, post, handleGetFeed } = usePost()
  useEffect(()=>{
    handleGetFeed()
  },[])
  if(loading || !Feed){
    return (
      <main>
        <h1>Feed is loading......</h1>
      </main>
    )
  }
  return (
    <main className='feed-page'>
      <div className="feed">
        <div className="posts">
          {Feed.map(post =>{
            return <Post user={post.user} post={post} key={post._id}/>
          })}

        </div>
      </div>
    </main>
  )
}

export default Feed