import { Link } from 'react-router-dom'
import { useDarkMode } from '../hooks/useDarkMode'
const NotFound = () => {
  const { darkMode } = useDarkMode()

  return (
    <div
      className={`${
        darkMode ? 'not-found-dark' : 'not-found'
      } min-h-screen flex flex-col items-center justify-center`}
    >
      <h1 className='text-8xl font-black text-center dark:text-white'>404</h1>
      <p className='text-xl text-center mb-8 dark:text-white'>
        Don&apos;t panic, follow the get me home plan. Click the button below to
        safely go back home
      </p>
      <Link
        to='/home'
        type='submit'
        className='border border-black dark:border-slate-100 p-2 hover:bg-black transition-colors hover:text-white dark:text-white'
      >
        Slowly head back home
      </Link>
    </div>
  )
}

export default NotFound
