import React from 'react'

const HEADER_LINK = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'About',
    url: '/about'
  },
  {
    name: 'Contact',
    url: '/contact'
  }
]

const Header = () => {
  return (
    <div>
      <ul>
        {HEADER_LINK.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Header