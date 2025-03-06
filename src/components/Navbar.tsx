"use client"
import React  from 'react';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';


import clsx from 'clsx';


const navigation = [
  { name: 'Home', href: '#intro', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contact Me', href: '#contact', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const [activeNav, setActiveNav] = useState("Home");

  const handleNavigationClick = (name: string) => {
    setActiveNav(name);
  }

  return (
    <Disclosure 
      as="nav" 
      className={clsx(
        "z-50 fixed w-full", 
        "bg-gray-950"
      )}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      activeNav === item.name ? 
                      'bg-blue-900 text-white' 
                      :`text-white hover:bg-gray-700 hover:text-white`,
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                    onClick={() => handleNavigationClick(item.name)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                activeNav === item.name ? 
                'bg-gray-900 text-white' 
                :`text-white hover:bg-gray-700 hover:text-white`,
                'rounded-md px-3 py-2 text-sm font-medium',
              )}
              onClick={() => handleNavigationClick(item.name)}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}