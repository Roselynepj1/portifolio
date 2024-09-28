import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
const SkillButton = ({ icon, alt, label }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className='flex items-center rounded-lg gap-2 border border-black p-2 dark:bg-slate-800 dark:border-neutral-50 hover:bg-black hover:text-white'
      >
        {icon && <img src={icon} alt={alt} className='w-4 h-4' />}
        <span className='dark:text-white'>{label}</span>
      </motion.div>
    </>
  )
}

SkillButton.propTypes = {
  icon: PropTypes.string,
  alt: PropTypes.string,
  label: PropTypes.string,
}

export default SkillButton
