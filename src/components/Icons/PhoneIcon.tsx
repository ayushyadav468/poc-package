import React from 'react'

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.023 15.488C19.393 15.473 18.6 15.436 18.099 15.348C17.557 15.252 16.905 15.066 16.446 14.923C16.086 14.811 15.694 14.91 15.427 15.176L13.21 17.38C11.678 16.573 10.451 15.633 9.412 14.588C8.367 13.549 7.427 12.322 6.62 10.79L8.824 8.572C9.09 8.305 9.189 7.913 9.077 7.553C8.935 7.095 8.748 6.443 8.653 5.901C8.564 5.4 8.528 4.607 8.512 3.977C8.499 3.432 8.055 3 7.51 3H4C3.562 3 3 3.328 3 4C3 8.539 4.84 12.874 7.966 16.034C11.126 19.16 15.461 21 20 21C20.672 21 21 20.438 21 20V16.49C21 15.945 20.568 15.501 20.023 15.488Z" />
    </svg>
  )
}

export default React.memo(PhoneIcon)