import React from 'react'

export const Row = ({className="", children,...props}) => {
  return (
    <div className={`row ${className}`} {...props}>{children}</div>
  )
}
