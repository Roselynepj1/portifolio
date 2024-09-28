import PropTypes from 'prop-types'
import MyLink from './MyLink'
const ProjectCard = ({ project }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20'>
      <div className='flex flex-col h-[400px]'>
        <img
          src={project.image.src}
          alt={project.image.alt}
          className='object-cover object-top rounded-sm w-full h-full'
        />
      </div>
      <div className='flex flex-col gap-4 justify-center'>
        <h4 className='text-2xl font-bold mb-4'>{project.title}</h4>
        <div className='flex flex-wrap gap-4'>
          <p className='text-xl dark:text-neutral-300 line-clamp-4 mb-6'>
            {project.description}
          </p>
          <MyLink href={`/projects/${project.id}`} label='View Project' />
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object,
}

export default ProjectCard
