import React from 'react'

function ExpandArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7.42969 9.5L5.92969 11L12 17.0703L18.0703 11L16.5703 9.5L12 14.0703L7.42969 9.5Z" />
    </svg>
  )
}

export default React.memo(ExpandArrowIcon)
