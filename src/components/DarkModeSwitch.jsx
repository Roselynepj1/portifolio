// DarkModeSwitch.js
import { motion } from 'framer-motion'
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'
import { useDarkMode } from '../hooks/useDarkMode'

export default function DarkModeSwitch() {
  const { darkMode, toggleDarkMode } = useDarkMode()

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  }

  return (
    <div
      onClick={toggleDarkMode}
      className={`flex-start flex h-[30px] w-[60px] rounded-[30px] bg-zinc-100 p-[3px] shadow-inner hover:cursor-pointer dark:bg-slate-700 ${
        darkMode && 'place-content-end'
      }`}
    >
      <motion.div
        className='flex h-[24px] w-[24px] items-center justify-center rounded-full bg-black/90'
        layout
        transition={spring}
      >
        <motion.div whileTap={{ rotate: 360 }}>
          {darkMode ? (
            <RiSunFill className='h-4 w-4 text-yellow-300' />
          ) : (
            <RiMoonClearFill className='h-4 w-4 text-slate-200' />
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}
