'use client'
import React from 'react'

interface IconProps {
  id: string
  width?: number
  color?: string
  height?: number
  // Other SVG-related props like width, height, etc. can be added here.
}

const SVGIcon: React.FC<IconProps> = ({
  id,
  width = 24,
  height = 24,
  color = 'white',
  ...props
}) => {
  return (
    <svg fill={color} width={width} height={height} {...props}>
      <use href={`/infoV2/icons/sprites.svg#${id}`} />
    </svg>
  )
}

export default SVGIcon
