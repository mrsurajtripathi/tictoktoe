import React from 'react'

export const Call = ({ className = "bg-primary", children, ...props }) => {
    return (
        <aside className={`bg-gradient rounded-3 p-4 p-sm-5 mt-5 ${className}`} {...props}>
            {children}
        </aside>
    )
}
