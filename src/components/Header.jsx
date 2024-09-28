import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import bars from '/src/assets/svg/bars.svg'
import barsDark from '/src/assets/svg/bars-dark.svg'
import logo from '/src/assets/svg/rose-flower.svg'
import close from '/src/assets/svg/close.svg'
import DarkModeSwitch from './DarkModeSwitch'
import { useDarkMode } from '../hooks/useDarkMode'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const { darkMode } = useDarkMode()

  return (
    <div className='shadow-lg dark:border-b dark:border-b-slate-600'>
      <div
        className={`fixed flex flex-col justify-center items-center top-0 left-0 w-full h-full bg-black opacity-90 z-50 ${
          openMobileMenu ? '' : 'hidden'
        }`}
      >
        <div className='container mx-auto px-4 pt-6'>
          <ul className='flex flex-col items-center gap-4 text-white '>
            <li>
              <button onClick={() => setOpenMobileMenu(false)} className=''>
                <img src={close} alt='Close Icon' width={24} height={24} />
              </button>
            </li>
            <li>
              <NavLink to='/' className='text-gray-200 colorful font-bold'>
                Home
              </NavLink>
            </li>
            <li>
              <HashLink
                to='/home#about'
                className='text-gray-200 colorful font-bold'
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                to='/home#projects'
                className='text-gray-200 colorful font-bold'
              >
                Projects
              </HashLink>
            </li>
            <li>
              <NavLink
                to='/contact'
                className='text-gray-200 colorful font-bold'
              >
                Contact
              </NavLink>
            </li>
            <li>
              <DarkModeSwitch />
            </li>
          </ul>
        </div>
      </div>
      <nav className='sticky top-0  container mx-auto px-4 sm:px-6 lg:px-8 z-50 backdrop-blur-sm'>
        <div className='mx-auto py-4'>
          <ul className='flex gap-4 items-center'>
            <li className='flex sm:hidden'>
              {darkMode ? (
                <img
                  src={barsDark}
                  alt='Logo'
                  height={28}
                  width={28}
                  className=''
                  onClick={() => setOpenMobileMenu(true)}
                />
              ) : (
                <img
                  src={bars}
                  alt='Logo'
                  height={28}
                  width={28}
                  className=''
                  onClick={() => setOpenMobileMenu(true)}
                />
              )}
            </li>
            <li className='flex flex-grow justify-end sm:justify-start'>
              <NavLink to='/' className='logo-link'>
                <div className='logo-image flex justify-center'>
                  <span className='logo-left-brace'>&#123;</span>
                  <img
                    src={logo}
                    alt='Logo'
                    height={24}
                    width={24}
                    className=''
                  />
                  <span className='logo-right-brace'>&#125;</span>
                </div>
                <div className='logo-text text-center'>
                  <span>roselyne</span>
                </div>
              </NavLink>
            </li>
            <li className='ml-auto hidden sm:flex '>
              <NavLink
                to='/'
                className='text-gray-800 font-bold text-lg colorful dark:text-neutral-100 dark:hover:colorful '
              >
                Home
              </NavLink>
            </li>
            <li className='ml-auto hidden sm:flex '>
              <HashLink
                to='/home#about'
                className='text-gray-800 font-bold text-lg colorful dark:text-neutral-100 dark:hover:colorful '
              >
                About
              </HashLink>
            </li>
            <li className='ml-auto hidden sm:flex '>
              <HashLink
                to='/home#projects'
                className='text-gray-800 font-bold text-lg colorful dark:text-neutral-100 dark:hover:colorful '
              >
                Projects
              </HashLink>
            </li>

            <li className='hidden sm:flex '>
              <NavLink
                to='/contact'
                className='text-gray-800 font-bold text-lg colorful dark:text-neutral-100 dark:hover:colorful '
              >
                Contact
              </NavLink>
            </li>
            <li className='hidden sm:flex '>
              <DarkModeSwitch />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
