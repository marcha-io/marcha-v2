import React from 'react';

import marchaLogo from '../images/marcha_logo.png';

import { PRODUCT_END_POINT, buildProductUrl } from '../utils/buildProductUrl';

type Prop = {};


// TODO:
// 1. add search bar
// 2. deal with sign in or log out users
// 3. add notifications again

const Navbar = (_: Prop): React.ReactElement => {
  return (
    <header className="relative sticky border-b border-gray-200 top-0 z-50" >
      <nav aria-label="Top">
        <div className="bg-white">
          <div className="mx-auto lg:max-w-[90%] px-4 sm:px-6 lg:px-8">
            <div>
              <div className="flex h-16 items-center justify-between">
                <div className="hidden lg:flex lg:items-center">
                  <a href="/">
                    <span className="sr-only">Marcha</span>
                    <img src={marchaLogo} className='h-8 w-auto' />
                  </a>
                </div>
                <div className="hidden h-full lg:flex">
                  <div className="ml-8">
                    <div className="flex h-full justify-center space-x-8">
                      <div className="flex">
                        <div className="relative flex">
                          <a href={buildProductUrl('clothing')} className="border-transparent hover:text-black transition-text duration-200 ease-in-out relative z-10 -mb -px flex items-center border-b-2 pt-px text-sm font-normal transition-colors duration-200 ease-out">Fashion</a>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="relative flex">
                          <a href={buildProductUrl('electronics')} className="border-transparent hover:text-black transition-text duration-200 ease-in-out relative z-10 -mb -px flex items-center border-b-2 pt-px text-sm font-normal transition-colors duration-200 ease-out">Electronics</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center lg:hidden">
                  <button type="button" data-action="click->mobile_toggle#mobileDropdown" className="-ml-2 rounded-md bg-white p-2 text-gray-400">
                    <span className="sr-only">Open menu</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  </button>
                </div>
                <a href="/" className="lg:hidden">
                  <span className="sr-only">Marcha</span>
                  <img src={marchaLogo} className='h-8 w-auto' />
                </a>
                <div className="flex flex-1 items-center justify-end">
                  <div className="flex items-center lg:ml-8">
                    <div className="flex space-x-8">
                      <div className=" hidden lg:flex">
                        <a className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Search</span>
                        </a>
                      </div>
                      <span className="hidden lg:flex mx-4 h-9 w-px bg-gray-200 lg:mx-6" aria-hidden="true"></span>
                      <div data-controller="account_toggle" className="relative inline-block text-left">
                        <div>
                          <button type="button" className="flex items-center mt-2 rounded-full text-gray-500 hover:text-gray-600" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            <span className="sr-only">Account</span>
                            <svg data-action="click->account_toggle#accountDropdown" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header >
  );
}

export default Navbar;
