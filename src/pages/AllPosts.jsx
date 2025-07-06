import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8 bg-instagram-lightgray'>
        <Container>
            <h1 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-instagram-purple to-instagram-pink bg-clip-text text-transparent">All Posts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {posts.map((post) => (
                <div key={post.$id} className="animate-fade-in-up">
                  <PostCard {...post} />
                </div>
              ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts