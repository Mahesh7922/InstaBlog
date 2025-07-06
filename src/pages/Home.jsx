import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    const authStatus = useSelector(state => state.auth.status);
    
    // If not authenticated or no posts, show landing page
    if (!authStatus || posts.length === 0) {
        return (
            <div className="w-full bg-white min-h-screen">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-instagram-purple via-instagram-pink to-instagram-orange animate-gradient py-20">
                    <Container>
                        <div className="flex flex-col items-center justify-center text-center">
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                                Welcome to InstaBlogs
                            </h1>
                            <p className="text-xl text-white/90 max-w-2xl mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                                Share your stories, connect with others, and discover amazing content from around the world
                            </p>
                            <button 
                                onClick={() => navigate('/login')} 
                                className="mt-4 px-8 py-3 bg-white text-instagram-purple rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg animate-pulse-subtle"
                            >
                                Get Started
                            </button>
                        </div>
                    </Container>
                </div>
                
                {/* Features Section */}
                <div className="py-16 bg-white">
                    <Container>
                        <h2 className="text-3xl font-bold text-center mb-12 instagram-gradient-text animate-fade-in-up">
                            Why Choose InstaBlogs?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {["Share Your Story", "Connect with Others", "Discover Content"].map((feature, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-instagram-border hover:shadow-md transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${0.1 * (index + 1)}s`}}>
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-instagram-purple to-instagram-pink flex items-center justify-center text-white text-2xl font-bold">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl font-semibold text-center mb-3 text-instagram-text">{feature}</h3>
                                    <p className="text-instagram-secondaryText text-center">
                                        {index === 0 && "Express yourself through beautiful blog posts with images and rich text."}
                                        {index === 1 && "Build a community around your content and engage with like-minded people."}
                                        {index === 2 && "Explore trending topics and find inspiration from other creators."}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </div>
                
                {/* CTA Section */}
                <div className="py-16 bg-instagram-lightgray">
                    <Container>
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-instagram-border text-center">
                            <h2 className="text-3xl font-bold mb-6 instagram-gradient-text">
                                Ready to start blogging?
                            </h2>
                            <p className="text-instagram-secondaryText max-w-2xl mx-auto mb-8">
                                Join our community today and start sharing your stories with the world.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button 
                                    onClick={() => navigate('/login')} 
                                    className="px-8 py-3 bg-instagram-blue text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300"
                                >
                                    Log In
                                </button>
                                <button 
                                    onClick={() => navigate('/signup')} 
                                    className="px-8 py-3 bg-white text-instagram-blue border border-instagram-blue rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
    
    // If posts are available and user is authenticated, show posts
    return (
        <div className='w-full py-8 bg-white'>
            <Container>
                <h1 className="text-3xl font-bold mb-8 text-center instagram-gradient-text animate-gradient">
                    Latest Posts
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <div key={post.$id} className="animate-fade-in-up" style={{animationDelay: `${0.1 * index}s`}}>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home