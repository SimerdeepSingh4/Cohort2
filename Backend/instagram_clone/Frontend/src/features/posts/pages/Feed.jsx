import React, { useEffect } from 'react'
import "../style/feed.scss"
import Post from '../components/Post'
import { usePost } from '../hook/usePost'
import Nav from '../../shared/components/Nav'
const Feed = () => {
  const { loading, Feed, post, handleGetFeed, handleLikePost, handleUnlikePost } = usePost()
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
    <Nav />
      <div className="feed">
        <div className="posts">
          {Feed.map(post =>{
            return <Post user={post.user} post={post} key={post._id} loading={loading} handleLikePost={handleLikePost} handleUnlikePost={handleUnlikePost}/>
          })}

        </div>
      </div>
    </main>
  )
}

export default Feed