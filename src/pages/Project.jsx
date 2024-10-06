import MyLink from '../components/MyLink'
import SkillButton from '../components/SkillButton'

import { db } from '../../firebase.config'
import { useState, useEffect } from 'react'
import { getDoc, doc } from 'firebase/firestore'
import { useNavigate, useParams } from 'react-router-dom'
import ProjectLoader from '../components/ProjectLoader'

const Project = () => {
  const [project, setProject] = useState({})
  const params = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  // const project = {
  //   id: 2,
  //   title: 'Rainy Days Jackets',
  //   description:
  //     'Step into a world of style and functionality with Rainy Days, your go-to destination for high-quality jackets. Explore a diverse collection that blends fashion with durability, ensuring you stay both trendy and protected. Embrace the elements in style with our curated selection of jackets designed for every rainy occasion.',
  //   image: {
  //     src: projectTwo,
  //     alt: 'Boulevard',
  //   },
  // }

  useEffect(() => {
    const getProject = async () => {
      const id = params.id

      if (!id) navigate('/NotFound')
      const docRef = doc(db, 'projects', id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setProject(docSnap.data())
        setLoading(false)
      }
    }
    getProject()
  }, [params, navigate])

  if (loading) {
    return (
      <>
        {' '}
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-24 flex justify-center flex-col items-center gap-8'>
          <ProjectLoader />
        </div>
      </>
    )
  }
  return (
    <>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-24 flex justify-center flex-col items-center gap-8'>
        <h1 className='text-4xl font-bold mb-4 uppercase text-center dark:text-white'>
          {project.title}
        </h1>
        <p className='text-xl text-center dark:text-white'>
          This page contains the case study of {project.title} Open-Source
          Project which includes the Project Overview, <br />
          Tools Used and Live Links to the official product.
        </p>
        <MyLink
          href={project.links.livePreview}
          target='_blank'
          label={'View Live Project'}
        />
      </div>
      <div className='bg-slate-200 dark:bg-slate-900'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-24'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20'>
            <div className='flex flex-col h-[400px]'>
              <img
                src={project.image.src}
                alt={project.image.alt}
                className='object-cover object-top rounded-sm w-full h-full'
              />
            </div>
            <div className='flex flex-col gap-4 justify-center'>
              <h4 className='text-2xl font-bold mb-4 dark:text-white'>
                {project.title}
              </h4>
              <div className='flex flex-col flex-wrap gap-4'>
                <p className='text-xl dark:text-neutral-300 mb-6'>
                  {project.description}
                </p>
                <h4 className='text-2xl font-bold mb-2 dark:text-white'>
                  Tools Used
                </h4>
                <div className='flex-wrap gap-4 flex items-start'>
                  {project.techStack.map((stack,index) => (
                    <SkillButton label={stack} key={`stack-${index}`} />
                  ))} 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
