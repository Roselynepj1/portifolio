import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
const MyLink = ({ label, href, classes, target='' }) => {
  return (
    <motion.a
      href={href}
      target={target}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className={`border py-2 sm:py-2 px-4 uppercase font-bold text-sm sm:text-xl border-black hover:bg-black hover:text-white transition dark:text-white dark:border-neutral-50 ${classes}`}
    >
      {label}
    </motion.a>
  )
}

MyLink.propTypes = {
  label: PropTypes.string,
  classes: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
}

export default MyLink
