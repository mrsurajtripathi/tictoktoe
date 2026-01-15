import React from 'react'

function Container({className="",children,...props}) {
  return (
    <div className={`container ${className}`} {...props}>{children}</div>
  )
}

export default Container