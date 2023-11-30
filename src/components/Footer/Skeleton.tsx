import React from 'react'
const listItemClass = 'my-7 mb-4 h-7 w-full rounded-md bg-darkKnight-500'
const listItemClass2 = 'my-7 mb-4 h-7 w-6/12 rounded-md bg-darkKnight-500'
const listItemClass3 = 'inline-block h-7 w-28 rounded-md bg-darkKnight-500'
const FooterSkeleton = () => {
  return (
    <>
      <div className="w-full bg-darkKnight-600 p-5">
        <div className="container max-w-7xl">
          <div className="md:flex">
            <div className="border-gray-700 py-4 md:w-5/12 md:border-r">
              <ul className="animate-pulse md:ml-auto md:mr-5 md:max-w-sm">
                <li className={listItemClass}></li>
                <li className={listItemClass}></li>
                <li className={listItemClass}></li>
                <li className={listItemClass}></li>
                <li className={listItemClass}></li>
              </ul>
            </div>
            <div className="md:w-7/12 md:p-4">
              <ul className="animate-pulse md:pl-2">
                <li className={listItemClass2}></li>
                <li className={listItemClass2}></li>
                <li className={listItemClass2}></li>
                <li className={listItemClass2}></li>
                <li className=" flex flex-wrap gap-x-3.5 gap-y-3 py-4 text-white">
                  <span className={listItemClass3}></span>
                  <span className={listItemClass3}></span>
                  <span className={listItemClass3}></span>
                  <span className={listItemClass3}></span>
                  <span className={listItemClass3}></span>
                  <span className={listItemClass3}></span>
                  <span className={listItemClass3}></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterSkeleton
