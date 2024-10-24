import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

import gitIcon from '/src/assets/svg/git.svg'
import htmlIcon from '/src/assets/svg/html5.svg'
import cssIcon from '/src/assets/svg/css3.svg'
import reactIcon from '/src/assets/svg/react.svg'
import javascriptIcon from '/src/assets/svg/javascript.svg'
import wordpressIcon from '/src/assets/svg/wordpress.svg'
import githubIcon from '/src/assets/svg/github.svg'
import npmIcon from '/src/assets/svg/npm.svg'
import vscodeIcon from '/src/assets/svg/vscode.svg'
import nodejsIcon from '/src/assets/svg/node-js.svg'
import phpIcon from '/src/assets/svg/php.svg'
import circleciIcon from '/src/assets/svg/circleci.svg'
import laravelIcon from '/src/assets/svg/laravel.svg'
import kubernetesIcon from '/src/assets/svg/kubernetes.svg'
import javaIcon from '/src/assets/svg/java.svg'
import typescriptIcon from '/src/assets/svg/typescript.svg'
import figmaIcon from '/src/assets/svg/figma.svg'
import sqlIcon from '/src/assets/svg/sql.svg'
import kotlinIcon from '/src/assets/svg/kotlin.svg'
import adobeIndesignIcon from '/src/assets/svg/adobe-indesign.svg'
import adobeXdIcon from '/src/assets/svg/adobe-xd.svg'
import uiUxIcon from '/src/assets/svg/ui-ux.svg'

import SkillButton from '../components/SkillButton'
import MyLink from '../components/MyLink'
import ProjectCard from '../components/ProjectCard'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useDarkMode } from '../hooks/useDarkMode'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase.config'
import ProjectLoader from '../components/ProjectLoader'

const Home = () => {
  const { darkMode } = useDarkMode()
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProjects = async () => {
      const docRefs = collection(db, 'projects')
      const docSnaps = await getDocs(docRefs)
      const data = []
      if (!docSnaps.empty) {
        docSnaps.docs.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() })
        })
        setProjects(data)
        setLoading(false)
      }
    }
    getProjects()
  }, [])

  return (
    <>
      <div className={darkMode ? 'dark' : 'pattern'}>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <Helmet>
            <title>Home</title>
          </Helmet>

          <div className='flex min-h-screen flex-col justify-center items-center'>
            <h1 className='text-3xl sm:text-3xl md:text-6xl lg:text-6xl font-black mb-8 uppercase dark:text-white text-center'>
              Hey, I&apos;m Roselyne P Johansen
            </h1>
            <h3 className='text-xl lg:text-3xl text-center mb-12 leading-normal dark:text-white'>
              A Result-Oriented Web Developer building and managing Websites and
              Web.
              <br />
              Applications that leads to the success of the overall product
            </h3>
            <motion.a
              href=''
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              className='border p-2 sm:p-4 uppercase font-bold  sm:text-2xl border-black hover:bg-black hover:text-white transition dark:text-white dark:border-neutral-50'
            >
              View Projects
            </motion.a>
          </div>
        </div>
      </div>

      <motion.div
        id='about'
        className='bg-slate-100 dark:bg-slate-900'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <div className='container mx-auto px-4 py-16 sm:p-6 lg:px-8 lg:py-24 dark:text-white'>
          <h2 className='flex flex-col justify-center items-center text-4xl font-bold dark:text-neutral-100 text-center uppercase'>
            <span className='dark:text-white'>About Me</span>
            <hr className='my-3 w-10 text-center h-2 bg-black dark:bg-white' />
          </h2>
          <p className='text-xl text-center mt-4 mb-12'>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8'>
            <div className='flex flex-col'>
              <h4 className='text-2xl font-bold mb-4'>Get to know me!</h4>
              <p className='mb-6'>
                Hey there, I&apos;m Roselyne P. Johansen, your friendly
                neighborhood front-end developer from the enchanting landscapes
                of Norway. I spend my days crafting digital experiences that are
                as cool as the Arctic breeze and as seamless as a
                well-architected codebase. Being a coding enthusiast, I dive
                into the world of HTML, CSS, and JavaScript, infusing creativity
                into every line. It&apos;s not just about making things work;
                it&apos;s about creating visually stunning and user-friendly
                websites that leave a lasting impression. Living amidst the
                fjords, I draw inspiration from the awe-inspiring nature around
                me. Whether I&apos;m coding or taking a break to gaze at the
                Northern Lights, these experiences shape my designs, giving them
                a touch of Norwegian elegance. Come join me on this coding
                journey where I blend Nordic creativity with cutting-edge tech.
                Let&apos;s create digital magic together – where innovation
                meets the tranquility of Norway! 🚀✨
              </p>
              <MyLink
                href={'/contact'}
                classes='self-start'
                label='Contact Me'
              />
            </div>
            <div>
              <h4 className='text-2xl font-bold mb-4'>
                My Proficient Skill Set
              </h4>
              <div className='flex flex-wrap gap-4'>
                <SkillButton icon={htmlIcon} alt='HTML Icon' label='HTML 5' />
                <SkillButton icon={cssIcon} alt='CSS3 Icon' label='CSS3' />
                <SkillButton
                  icon={javascriptIcon}
                  alt='Javascript Icon'
                  label='Javascript'
                />
                <SkillButton icon={reactIcon} alt='React Icon' label='React' />
                <SkillButton
                  icon={wordpressIcon}
                  alt='Wordpress Icon'
                  label='Wordpress'
                />
                <SkillButton icon={gitIcon} alt='Git Icon' label='Git' />
                <SkillButton
                  icon={githubIcon}
                  alt='Github Icon'
                  label='Github'
                />
                <SkillButton
                  icon={vscodeIcon}
                  alt='VsCode Icon'
                  label='VsCode'
                />
                <SkillButton icon={npmIcon} alt='NPM Icon' label='NPM' />
                <SkillButton
                  icon={nodejsIcon}
                  alt='Nodejs Icon'
                  label='Node JS'
                />
                <SkillButton icon={phpIcon} alt='PHP Icon' label='PHP' />
                <SkillButton
                  icon={circleciIcon}
                  alt='Circle CI Icon'
                  label='Circle CI'
                />
                <SkillButton
                  icon={laravelIcon}
                  alt='Laravel Icon'
                  label='Laravel'
                />
                <SkillButton
                  icon={kubernetesIcon}
                  alt='Kubernetes Icon'
                  label='Kubernetes'
                />
                <SkillButton icon={javaIcon} alt='Java Icon' label='Java' />
                <SkillButton
                  icon={typescriptIcon}
                  alt='TypeScript Icon'
                  label='TypeScript'
                />
                <SkillButton icon={figmaIcon} alt='Figma Icon' label='Figma' />
                <SkillButton icon={sqlIcon} alt='SQL Icon' label='SQL' />
                <SkillButton
                  icon={kotlinIcon}
                  alt='Kotlin Icon'
                  label='Kotlin'
                />
                <SkillButton
                  icon={adobeIndesignIcon}
                  alt='Adobe Indesign Icon'
                  label='Adobe Indesign'
                />
                <SkillButton
                  icon={adobeXdIcon}
                  alt='Adobe Xd Icon'
                  label='Adobe Xd'
                />
                <SkillButton icon={uiUxIcon} alt='UI/UX Icon' label='UI/UX' />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className='bg-slate-200 dark:bg-slate-950'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <div
          className='container mx-auto px-4 py-16 sm:p-6 lg:px-8 lg:py-24 dark:text-white'
          id='projects'
        >
          <h2 className='flex flex-col justify-center items-center text-4xl font-bold dark:text-neutral-100 text-center uppercase'>
            <span className='dark:text-white'>Projects</span>
            <hr className='my-3 w-10 text-center h-2 bg-black dark:bg-white' />
          </h2>
          <p className='text-xl text-center mt-4 mb-12'>
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={true}
            className='mySwiper'
            pagination={{
              dynamicBullets: true,
            }}
            // freeMode={true}
            modules={[Pagination,  Navigation]}
          >
            {loading ? (
              <>
                <ProjectLoader />
              </>
            ) : (
              projects.map((project) => (
                <SwiperSlide key={project.id}>
                  {' '}
                  <ProjectCard project={project} />
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
      </motion.div>
    </>
  )
}

export default Home
