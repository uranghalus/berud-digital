'use client'
import {
  RiCloseLine,
  RiDashboardLine,
  RiLogoutBoxLine,
  RiMenu5Line,
  RiProfileLine,
  RiUser4Line,
} from '@remixicon/react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
const NavLinks = [
  { title: 'Home', url: '/' },
  { title: 'Layanan', url: '/services' },
  { title: 'Projek', url: '/projects' },
  { title: 'Tentang', url: '/about' },
  { title: 'Kontak', url: '/contact' },
]
const FNavbar = () => {
  const signoutHandler = () => {
    signOut({ callbackUrl: '/signin' })
  }
  const { data: session } = useSession()
  const pathname = usePathname()
  return (
    <header className="sticky left-0 top-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-4 bg-zinc-900">
      <nav
        className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto"
        aria-label="Global"
      >
        <div className="md:col-span-3">
          {/* <!-- Logo --> */}
          <Link
            className="flex items-center space-x-3 rtl:space-x-reverse"
            href=""
            aria-label="Preline"
          >
            <div className="p-2 bg-white shadow-xl shadow-gray-800 border border-gray-200 rounded-lg">
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
              src={'./images/Text.svg'}
              height={32}
              width={32}
              alt="text logo"
            ></Image>
          </Link>
          {/* <!-- End Logo --> */}
        </div>

        {/* <!-- Button Group --> */}
        <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
          {session && session.user ? (
            <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
              <button
                id="hs-dropdown-with-header"
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
              >
                <div className="p-2 rounded-full bg-default-100 border border-gray-200 flex items-center justify-center">
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
                  {session.user.isAdmin && (
                    <Link
                      href={'/admin'}
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                    >
                      <RiDashboardLine className="flex-shrink-0 size-4 fill-current" />
                      Admin Page
                    </Link>
                  )}
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
          ) : (
            <>
              <Link
                href={'/signin'}
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white"
              >
                Sign In
              </Link>
              <Link
                href={'https://wa.me/6285754635256'}
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-gray-700 hover:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-lime-500"
              >
                Hubungi Kami
              </Link>
            </>
          )}

          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-zinc-700 text-gray-200  hover:bg-zinc-800 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <RiMenu5Line className="hs-collapse-open:hidden flex-shrink-0 size-4 fill-current" />
              <RiCloseLine className="hs-collapse-open:block hidden flex-shrink-0 size-4 fill-current" />
            </button>
          </div>
        </div>
        {/* <!-- End Button Group --> */}
        {/*  */}
        {/* <!-- Collapse --> */}
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
            {NavLinks.map((item, index) => (
              <div key={index}>
                <Link
                  className={`inline-block ${
                    pathname === item.url ? 'text-default-400' : 'text-gray-200'
                  }  hover:text-default-400 dark:text-white dark:hover:text-neutral-300`}
                  href={item.url}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* <!-- End Collapse --> */}
      </nav>
    </header>
  )
}

export default FNavbar
