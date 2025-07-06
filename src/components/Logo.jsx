import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className="font-bold text-xl bg-gradient-to-r from-instagram-purple via-instagram-pink to-instagram-yellow bg-clip-text text-transparent">
      InstaBlogs
    </div>
  )
}

export default Logo