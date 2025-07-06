import React from 'react'

function Container({children}) {
  return <div className='w-full max-w-6xl mx-auto px-4 animate-fade-in-up'>{children}</div>;
}

export default Container