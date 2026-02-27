import { useContext } from "react";
import { getFeed } from "../services/post.api";
import { PostContext } from "../post.context";


export const usePost = () => {
    const context = useContext(PostContext)

    const { loading,setLoading, post, setPost, Feed, setFeed } = context

    const handleGetFeed = async () => {
        setLoading(true)
        const data = await getFeed()
        setFeed(data.posts)
        setLoading(false)
    }

    return { loading, Feed, post, handleGetFeed }
}