import { useContext, useEffect } from "react";
import { createPost, getFeed, likePost, unlikePost } from "../services/post.api";
import { PostContext } from "../post.context";


export const usePost = () => {
    const context = useContext(PostContext)

    const { loading, setLoading, post, setPost, Feed, setFeed } = context

    const handleGetFeed = async () => {
        setLoading(true)
        const data = await getFeed()
        setFeed(data.posts)
        setLoading(false)
    }

    const handleCreatePost = async (imageFile, caption) => {
        setLoading(true)
        const data = await createPost(imageFile, caption)
        setFeed([data.post, ...Feed])
        setLoading(false)
    }
    const handleLikePost = async (post) => {
        const data = await likePost(post)
        await handleGetFeed()
    }

    const handleUnlikePost = async (post) => {
        const data = await unlikePost(post)
        await handleGetFeed()
    }
    useEffect(() => {
        handleGetFeed()
    }, [])
    return { loading, Feed, post, handleGetFeed, handleCreatePost, handleLikePost, handleUnlikePost }
}