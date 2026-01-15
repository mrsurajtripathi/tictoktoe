import React from 'react'

export const Section = ({children,...frwprops}) => {
  return (
    <section {...frwprops}>{children}</section>
  )
}
