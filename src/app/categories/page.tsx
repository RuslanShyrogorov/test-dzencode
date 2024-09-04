import React from 'react'

interface Props {
  className?: string
}

const Categories: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <h1>Categories</h1>
    <p>page</p>
  </div>
)

export default Categories
