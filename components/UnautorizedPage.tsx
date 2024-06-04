/* eslint-disable react/no-unescaped-entities */
import { RiArrowLeftLine } from '@remixicon/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UnautorizedPage = () => {
  return (
    <div className="max-w-[50rem] h-screen flex flex-col mx-auto size-full">
      <header className="mb-auto flex justify-center z-50 w-full py-4">
        <nav className="px-4 sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-white shadow-xl shadow-gray-800/10 border border-gray-100 rounded-lg">
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
            ></Image>
          </div>
        </nav>
      </header>

      <main id="content">
        <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">
            401
          </h1>
          <p className="mt-3 text-gray-600 dark:text-neutral-400">
            Oops, something went wrong.
          </p>
          <p className="text-gray-600 dark:text-neutral-400">
            Sorry, we couldn't find your page.
          </p>
          <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <Link
              href={'/'}
              className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              <RiArrowLeftLine className="flex-shrink-0 size-4 fill-current" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <footer className="mt-auto text-center py-5">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            © All Rights Reserved. 2022.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default UnautorizedPage
