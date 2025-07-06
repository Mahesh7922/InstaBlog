import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-instagram-border animate-fade-in-up">
        <div className="relative">
          <img 
            src={appwriteService.getFilePreview(featuredImage).replace("preview", "view")}
            className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-3">
          <h3 className="text-instagram-text font-semibold truncate">{title}</h3>
        </div>
      </div>
    </Link>
  )
}

export default PostCard