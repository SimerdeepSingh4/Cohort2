import { createContext, useState } from "react";


export const PostContext = createContext()

export const PostContextProvider = ({children})=>{
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState(null)
    const [Feed, setFeed] = useState(null)
    return(
        <PostContext.Provider value = {{loading,setLoading, post, setPost, Feed, setFeed}}>
        
            {children}
        </PostContext.Provider>
    )
}
