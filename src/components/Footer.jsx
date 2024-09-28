import { Link } from 'react-router-dom'
import logo from '/src/assets/svg/rose-flower.svg'
import linkedin from '/src/assets/svg/linkedin.svg'
import github from '/src/assets/svg/github.svg'
import githubDark from '/src/assets/svg/github-dark.svg'
import x from '/src/assets/svg/x.svg'
import xDark from '/src/assets/svg/x-dark.svg'
import { useDarkMode } from '../hooks/useDarkMode'
const Footer = () => {
  
  const { darkMode } = useDarkMode()
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-4'>
      <div className='flex flex-col '>
        <div className='hidden sm:flex  items-center gap-4 py-2'>
          <Link to='/' className='logo-link flex-grow flex items-start'>
            <div className='logo-image flex justify-center'>
              <span className='logo-left-brace'>&#123;</span>
              <img src={logo} alt='Logo' height={24} width={24} />
              <span className='logo-right-brace'>&#125;</span>
            </div>
            <div className='logo-text text-center'>
              <span>roselyne</span>
            </div>
          </Link>

          <Link className='colorful hidden sm:flex dark:text-neutral-100'>
            +47 408 97543
          </Link>
          <Link className='hidden sm:flex colorful dark:text-neutral-100'>
            roselynepj1@gmail.com
          </Link>
          <Link className='hidden sm:flex ' to={'https://twitter.com/'} target='_blank'>
            {darkMode ? (
              <img
                src={xDark}
                alt='LinkedIn Social Icon'
                height={20}
                width={20}
              />
            ) : (
              <img src={x} alt='LinkedIn Social Icon' height={20} width={20} />
            )}
          </Link>
          <Link
            className='hidden sm:flex '
            target='_blank'
            to={'https://github.com/Roselynepj1'}
          >
            {darkMode ? (
              <img
                src={githubDark}
                alt='LinkedIn Social Icon'
                height={20}
                width={20}
              />
            ) : (
              <img
                src={github}
                alt='LinkedIn Social Icon'
                height={20}
                width={20}
              />
            )}
          </Link>
          <Link
            className='hidden sm:flex '
            to={'https://linkedin.com/'}
            target='_blank'
          >
            <img
              src={linkedin}
              alt='LinkedIn Social Icon'
              height={24}
              width={24}
            />
          </Link>
        </div>
        <ul className='flex gap-4 border-t border-gray-300 pt-4'>
          <li className='hidden sm:flex '>
            <Link
              to='/'
              className='text-gray-800 font-bold text-lg colorful dark:text-neutral-100 '
            >
              Home
            </Link>
          </li>
          <li className='hidden sm:flex '>
            <Link
              to='/home#about'
              className='text-gray-800 font-bold text-lg colorful dark:text-neutral-100 '
            >
              About
            </Link>
          </li>
          <li className='hidden sm:flex '>
            <Link
              to='/home#projects'
              className='text-gray-800 font-bold text-lg colorful dark:text-neutral-100 '
            >
              Projects
            </Link>
          </li>

          <li className='hidden sm:flex '>
            <Link
              to='/contact'
              className='text-gray-800 font-bold text-lg colorful dark:text-neutral-100 '
            >
              Contact
            </Link>
          </li>
          <li className='flex-grow flex justify-end'>
            <p className='credits dark:text-neutral-100'>
              Designed and built by <span>Roselyne</span> with <span>Love</span>
              &nbsp;&&nbsp;<span>Coffee</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
