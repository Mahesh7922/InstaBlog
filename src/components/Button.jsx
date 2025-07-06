import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-instagram-blue',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-md ${bgColor} ${textColor} ${className}`}{...props}>
        {children}
    </button>
  )
}

export default Button