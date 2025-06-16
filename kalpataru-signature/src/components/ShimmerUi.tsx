import React from 'react'

const ShimmerUi = () => {
  return (
     <div className="shimmer-wrapper">
      {[1, 2, 3, 4, 5].map((item) => (
        <div key={item} className="shimmer-box" />
      ))}
    </div>
  )
}

export default ShimmerUi
