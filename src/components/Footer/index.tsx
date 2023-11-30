/* global 
  RightSideType
  HFDataWithChildType
 */

import React from 'react';
import { getNestedData } from '../../lib/common';
import DownloadIcon from '../Icons/DownloadIcon';
import MailIcon from '../Icons/MailIcon';
import PhoneIcon from '../Icons/PhoneIcon';
import SVGIcon from '../SVGIcons';
import RenderList from './RenderList';

type SiteMapType = {
  apiEndpoint: string | null
  siteMap: string | null
  domain: string | null
}

export const Footer = async ({ apiEndpoint, siteMap, domain }: SiteMapType) => {
  const [env, ...rest] = domain ? domain.split('.') : 'qa1.foundit.in'.split('.') // find a better way to do this
  const websiteURL = rest.join('.')

  const rightSideKeys = ['mail', 'contact_info', 'stay_connected', 'legal']
  const url = `${apiEndpoint}/thor/api/public/sites/v1/load-module?site=${siteMap}&tenant=msite&category=home-msite&lang=en&domain=${domain}&subalias=MODULE_FOOTER_MSITE_SSR&alias=HOOK_FOOTER`
  const footerContent = await getNestedData(url)

  const rightSideData: RightSideType = {}
  const convertSnakeCase = (original: string) => {
    return original.toLowerCase().replace(/\s+/g, '_')
  }

  footerContent?.forEach((val: HFDataWithChildType) => {
    const key = convertSnakeCase(val.name)
    if (rightSideKeys.includes(key) && val.children?.length) {
      rightSideData[key] = val.children
    }
  })

  if (!footerContent || footerContent.length < 1) {
    return <footer> loading.... </footer>
  }

  return (
    <footer className="w-full bg-darkKnight-600 p-5">
      <div className="container max-w-7xl">
        <div className="md:flex">
          <div className="border-gray-700 py-4 md:w-5/12 md:border-r">
            <RenderList
              footerContent={footerContent}
              rightSideKeys={rightSideKeys}
            />
          </div>
          <div className="p-4 md:w-7/12">
            <ul className="md:pl-2">
              {rightSideData.contact_info?.length && (
                <li className="border-b border-gray-700 pb-4 text-white">
                  <span className="inline-block align-middle">
                    <PhoneIcon width={20} />
                  </span>
                  <span className="mx-2 border-r border-gray-700 "></span>
                  <a
                    href={`${apiEndpoint}/${rightSideData.contact_info[0].link_rewrite}`}
                    className="text-white hover:text-white hover:underline"
                    aria-label="contact-info"
                  >
                    {rightSideData.contact_info[0].name}
                  </a>
                </li>
              )}
              <li className="border-b border-gray-700 py-4 text-white">
                <span className="inline-block pr-3 align-middle">
                  <SVGIcon id="footer-mail" width={20} />
                </span>
                {/* <a
                    href={rightSideData.mail[0].link_rewrite ?? ''}
                    className="text-white hover:text-white hover:underline"
                    aria-label="mail"
                  >
                    {rightSideData.mail[0].name}
                  </a> */}
                <a
                  href={`mailto:info@${websiteURL}`}
                  className="text-white hover:text-white hover:underline"
                  aria-label="mail"
                >
                  {`info@${websiteURL}`}
                </a>
              </li>
              <li className="flex items-center gap-2 border-b border-gray-700 py-4 text-white">
                <span className="inline-block align-middle">
                  <DownloadIcon width={20} />
                </span>
                Download The App
                <span className="flex items-center gap-2">
                  <a
                    href="https://apps.apple.com/in/app/monster-jobs/id525775161"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <SVGIcon id={'playstore'} height={20} width={82} />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.monsterindia.seeker.views&referrer=utm_source%3DWebsite%26utm_campaign%3DJobs-App"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <SVGIcon id={'appstore'} height={20} width={82} />
                  </a>
                </span>
              </li>

              {rightSideData.stay_connected?.length && (
                <li className="border-b border-gray-700 py-4 text-white">
                  <span className="inline-block pr-3 align-middle">
                    Stay Connected
                  </span>
                  {rightSideData.stay_connected.map(
                    (val, index) =>
                      // This is not a good way to use map -- Ayush seeker
                      val.link_rewrite && (
                        <span
                          className="inline-block pr-3 align-middle"
                          key={index}
                        >
                          <a
                            href={val.link_rewrite}
                            target="_blank"
                            aria-label="stay-connected"
                          >
                            <SVGIcon
                              id={convertSnakeCase(val.name)}
                              width={22}
                            />
                          </a>
                        </span>
                      ),
                  )}
                </li>
              )}
              <li className="py-4 text-white">
                {rightSideData.legal?.map(
                  (val, index) =>
                    // This is not a good way to use map -- Ayush seeker
                    val.link_rewrite && (
                      <span key={index}>
                        <span className="mx-2">|</span>
                        <a
                          href={val.link_rewrite}
                          target="_blank"
                          className="mb-4 inline-block text-white hover:text-white hover:underline"
                          aria-label="legal"
                        >
                          {val.name}
                        </a>
                      </span>
                    ),
                )}
                <span className="mx-2">|</span>
                <br /> © 2023 foundit | All rights Reserved
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
