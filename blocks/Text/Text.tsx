import React from 'react'

const Text: React.FC<{
    headline: string,
    description: string
  }> = ({ headline , description }) => {
  return (
    <div>
        This is my Text...
        <h1>{headline}</h1>
        <h5>{description}</h5>
    </div>
  )
}

export default Text