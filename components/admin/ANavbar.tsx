'use client'

import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import {
  RiBellLine,
  RiLogoutBoxLine,
  RiNotification2Line,
  RiProfileLine,
  RiPulseLine,
  RiUser4Line,
} from '@remixicon/react'
function ANavbar() {
  const { data: session } = useSession()
  const signoutHandler = () => {
    signOut({ callbackUrl: '/signin' })
  }
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-neutral-800 dark:border-neutral-700">
      <nav
        className="flex basis-full items-center w-full mx-auto px-4 sm:px-6"
        aria-label="Global"
      >
        <div className="me-5 lg:me-0 lg:hidden">
          <Link
            className="flex items-center space-x-3 rtl:space-x-reverse"
            href=""
            aria-label="Preline"
          >
            <div className="p-2 bg-white shadow-xl shadow-gray-800/10 border border-gray-200 rounded-lg">
              <Image
                src="./images/New Logo.svg"
                width={32}
                height={32}
                className="h-6 w-6"
                alt="Flowbite Logo"
              />
            </div>
            <Image
              className="h-8 w-auto"
              src={'./images/Text-Logo.svg'}
              height={32}
              width={32}
              alt="text logo"
            />
          </Link>
        </div>

        <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
          <div className="sm:hidden">
            <button
              type="button"
              className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
            >
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </div>

          <div className="hidden sm:block">
            <label htmlFor="icon" className="sr-only">
              Search
            </label>
            <div className="relative min-w-72 md:min-w-80">
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                <svg
                  className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <input
                type="text"
                id="icon"
                name="icon"
                className="py-2 px-4 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="flex flex-row items-center justify-end gap-2">
            <button
              type="button"
              className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
            >
              <RiNotification2Line className="flex-shrink-0 size-4 fill-current" />
            </button>
            <button
              type="button"
              className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
              data-hs-offcanvas="#hs-offcanvas-right"
            >
              <RiPulseLine className="flex-shrink-0 size-4 fill-current" />
            </button>

            <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
              <button
                id="hs-dropdown-with-header"
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
              >
                <div className="p-2 rounded-full bg-primary-100 border border-gray-200 flex items-center justify-center">
                  <RiUser4Line className="size-4" />
                </div>
              </button>

              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-900 dark:border dark:border-neutral-700"
                aria-labelledby="hs-dropdown-with-header"
              >
                <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-neutral-800">
                  <p className="text-sm text-gray-500 dark:text-neutral-400">
                    Signed in as
                  </p>
                  <p className="text-sm font-medium text-gray-800 dark:text-neutral-300">
                    {session?.user.email}
                  </p>
                </div>
                <div className="mt-2 py-2 first:pt-0 last:pb-0">
                  <Link
                    href={'/profile'}
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                  >
                    <RiProfileLine className="flex-shrink-0 size-4 fill-current" />
                    Profile
                  </Link>

                  <div
                    onClick={signoutHandler}
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                  >
                    <RiLogoutBoxLine className="flex-shrink-0 size-4 fill-current" />
                    Logout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default ANavbar
