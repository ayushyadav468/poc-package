import React from 'react'

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 4C2.895 4 2 4.895 2 6V18C2 19.105 2.895 20 4 20H20C21.105 20 22 19.105 22 18V6C22 4.895 21.105 4 20 4H4ZM4 6H20V7.00195L12 12L4 7.00195V6ZM4 9.00195L12 14L20 9.00195V18H4V9.00195Z" />
    </svg>
  )
}

export default React.memo(MailIcon)
