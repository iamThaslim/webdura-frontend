'use client'

import { Fragment, forwardRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import { Search, MessageCircle, Bell, Menu, X } from 'lucide-react'
import SearchInput from './ui/SearchInput'

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

/**
 * Desktop navigation menu.
 *
 * @returns A navigation menu for desktop display.
 */
function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      {navigation.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}


<SearchInput placeholder="Search..." />

/**
 * A button for toggling the mobile navigation menu.
 *
 * @returns A button that will toggle the mobile navigation menu when clicked.
 *          The button will display an X when the menu is open, and a menu
 *          icon when the menu is closed.
 */
function MobileNavButton({ open }: { open: boolean }) {
  return (
    <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors" aria-label="Toggle menu">
      {open ? (
        <X className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <Menu className="block h-6 w-6" aria-hidden="true" />
      )}
    </DisclosureButton>
  )
}

/**
 * A mobile navigation menu.
 *
 * @returns A navigation menu for mobile display.
 *
 *          The menu is hidden by default and can be toggled by clicking the
 *          MobileNavButton component. When the menu is open, it will display
 *          the navigation items as a list of buttons, along with a search input
 *          at the bottom of the menu.
 */
function MobileNav() {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 -translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 -translate-y-1"
    >
      <DisclosurePanel className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map(({ href, label }) => (
            <DisclosureButton
              key={href}
              as={Link}
              href={href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors"
            >
              {label}
            </DisclosureButton>
          ))}
        </div>
        <div className="px-5 py-4 border-t border-gray-200">
          <SearchInput />
        </div>
      </DisclosurePanel>
    </Transition>
  )
}

/**
 * The header component for the application.
 *
 * @returns The header component with a navigation menu, search input, and notifications.
 */

const Header = forwardRef<HTMLDivElement | null, React.HTMLAttributes<HTMLDivElement> >(function Header(props, ref) {
  return (
    <Disclosure as="header" className="sticky top-0 z-50 w-full border-b bg-white bg-opacity-95 backdrop-blur supports-[backdrop-filter]:bg-opacity-60">
      {({ open }) => (
        <>
          <div ref={ref} className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              {/* Mobile: Left section (Menu and Search) */}
              <div className="flex items-center md:hidden w-1/3">
                <MobileNavButton open={open} />
                <button
                  type="button"
                  className="ml-2 p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors"
                  aria-label="Open search"
                >
                  <Search className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="flex items-center justify-center md:justify-start md:w-auto flex-grow md:flex-grow-0 w-1/3 md:w-auto">
                <Link href="/" className="flex-shrink-0 md:mr-10" aria-label="Home">
                  <Image
                    src="/images/logo.png"
                    alt=""
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                    priority
                  />
                </Link>
                <div className="hidden md:block ml-10">
                  <DesktopNav />
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <SearchInput />
                <button
                  type="button"
                  className="relative rounded-full p-1 text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
                  aria-label="View messages"
                >
                  <MessageCircle className="h-6 w-6" aria-hidden="true" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="relative rounded-full p-1 text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
                  aria-label="View notifications"
                >
                  <Bell className="h-6 w-6" aria-hidden="true" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" aria-hidden="true" />
                </button>
              </div>

              <div className="flex items-center justify-end space-x-4 md:hidden w-1/3">
                <button
                  type="button"
                  className="relative rounded-full p-1 text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
                  aria-label="View messages"
                >
                  <MessageCircle className="h-6 w-6" aria-hidden="true" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="relative rounded-full p-1 text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
                  aria-label="View notifications"
                >
                  <Bell className="h-6 w-6" aria-hidden="true" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          <MobileNav />
        </>
      )}
    </Disclosure>
  )
})

export default Header

