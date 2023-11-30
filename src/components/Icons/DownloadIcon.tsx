import React from 'react'

function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M10.5 2C9.68294 2 9 2.68294 9 3.5V10H4.58594L12 17.4141L19.4141 10H15V3.5C15 2.68294 14.3171 2 13.5 2H10.5ZM11 4H13V12H14.5859L12 14.5859L9.41406 12H11V4ZM2 20V22H22V20H2Z" />
    </svg>
  )
}

export default React.memo(DownloadIcon)
