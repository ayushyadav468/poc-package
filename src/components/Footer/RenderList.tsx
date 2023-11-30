'use client'

/* global 
  HFDataWithChildType
  tabType
 */

import React, { useState } from 'react'
import ExpandArrowIcon from '../Icons/ExpandArrowIcon'

// CSS classes for repeated styles
const listItemClass = 'cursor-pointer border-b border-gray-700 text-white'
const listItemFirstChildClass = 'pb-3'
const listItemClassWithoutFirstChild = 'py-3'

const RenderListItem = ({
  items,
  tabId,
  handleTab,
  isAnimating,
  tab,
}: {
  items: HFDataWithChildType[]
  tabId: number
  handleTab: (index: tabType) => void
  isAnimating: boolean
  tab: tabType
}) => {
  return (
    <ul
      className={`mt-4 cursor-default border-t border-gray-700 pt-2 ${tab === tabId ? 'block' : 'hidden'
        }`}
    >
      {items.map((val, index) =>
        val.children ? (
          <li
            className={`${listItemClass} ${index === 0
              ? listItemFirstChildClass
              : listItemClassWithoutFirstChild
              }`}
            key={val.id}
            onClick={() => handleTab(val.id)}
          >
            <div className="flex justify-between text-sm">
              {val.name}
              <span
                className={`text-xs ${isAnimating && tab === val.id ? 'animate' : 'animateRev'
                  }`}
              >
                <span className="inline-block pr-3 align-middle">
                  <ExpandArrowIcon width={20} />
                </span>
              </span>
            </div>
            <RenderListItem
              items={val.children}
              tabId={val.id}
              handleTab={handleTab}
              isAnimating={isAnimating}
              tab={tab}
            />
          </li>
        ) : (
          <li
            className="cursor-pointer  py-1 text-xs hover:underline"
            key={index}
          >
            <a
              href={val.link_rewrite ? val.link_rewrite : ''}
              target="_blank"
              aria-label="check"
            >
              {val.name}
            </a>
          </li>
        ),
      )}
    </ul>
  )
}

const RenderList = ({
  footerContent,
  rightSideKeys,
}: {
  footerContent: HFDataWithChildType[]
  rightSideKeys: string[]
}) => {
  const [tab, setTab] = useState<tabType>(-1)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)

  const handleTab = (index: tabType): void => {
    setTab((prevTab) => (prevTab === index ? -1 : index))
    setIsAnimating(true)
  }

  const convertSnakeCase = (original: string) => {
    return original.toLowerCase().replace(/\s+/g, '_')
  }

  return (
    <ul className="ml-3 md:mr-9">
      {footerContent.map(
        (val) =>
          !rightSideKeys.includes(convertSnakeCase(val.name)) && (
            <li
              className={`${listItemClass} ${listItemClassWithoutFirstChild}`}
              key={val.id}
            >
              <div
                className="flex justify-between text-sm"
                onClick={() => handleTab(val.id)}
              >
                {val.name}
                <span className="pr-3 text-xs">
                  <span
                    className={`inline-block align-middle ${isAnimating && tab === val.id ? 'animate' : 'animateRev'
                      }`}
                  >
                    <ExpandArrowIcon width={20} />
                  </span>
                </span>
              </div>
              {val.children && (
                <RenderListItem
                  items={val.children}
                  tabId={val.id}
                  handleTab={handleTab}
                  isAnimating={isAnimating}
                  tab={tab}
                />
              )}
            </li>
          ),
      )}
    </ul>
  )
}

export default RenderList
