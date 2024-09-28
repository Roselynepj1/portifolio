import { useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Joi from 'joi'
import mailIcon from '/src/assets/svg/mail.svg'
import { motion } from 'framer-motion'

const Contact = () => {
  const form = useRef()
  const serviceKey = import.meta.env.VITE_EMAILJS_SERVICE_KEY
  const templateKey = import.meta.env.VITE_EMAILJS_TEMPLATE_KEY
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  // Define state for form inputs and validation errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

  // Define the Joi schema for validation
  const schema = Joi.object({
    name: Joi.string().required().label('Name'),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label('Email'),
    subject: Joi.string().required().label('Subject'),
    message: Joi.string().required().label('Message'),
  })

  // Handle input changes and update state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(serviceKey, templateKey, form.current, {
        publicKey,
      })
      .then(
        () => {
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          })
          setSuccess('Messsage submitted successfully')
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
  }

  // Validate form data when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault() // Prevent page reload
    const { error } = schema.validate(formData, { abortEarly: false }) // Validate form data
    if (error) {
      const errorMessages = {}
      error.details.forEach((err) => {
        errorMessages[err.path[0]] = err.message
      })
      setErrors(errorMessages)
    } else {
      setErrors({})
      // Here you can handle the successful form submission, such as sending the data to an API
      sendEmail(e)
    }
  }

  return (
    <>
      <div className='container mx-auto px-4 py-16 sm:p-6 lg:px-8 lg:py-24 dark:text-white'>
        <h2 className='flex flex-col justify-center items-center text-4xl font-bold dark:text-neutral-100 text-center uppercase'>
          <span className='dark:text-white'>Contact Me</span>
          <hr className='my-3 w-10 text-center h-2 bg-black dark:bg-white' />
        </h2>
        <p className='text-xl text-center mt-2'>
          Feel free to contact me by submitting the form below, and I will get
          back to you as soon as possible.
        </p>
      </div>
      <div className='bg-slate-100 dark:bg-gray-900'>
        <div className='container mx-auto px-4 py-16 sm:p-6 lg:px-8 lg:py-24 dark:text-white '>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8'>
            <div className='h-[400px] flex justify-center items-center'>
              <motion.img
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
                src={mailIcon}
                alt=''
                className='w-[300px] h-[300px]'
              />
            </div>
            <form
              ref={form}
              className='flex flex-col gap-4'
              onSubmit={handleSubmit}
            >
              <h2 className='text-2xl font-bold'>Have some questions?</h2>

              {/* Name input */}
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='border border-black dark:border-slate-700 p-2 bg-transparent'
                placeholder='Enter your fullname'
              />
              {errors.name && <p className='text-red-500'>{errors.name}</p>}

              {/* Email input */}
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='border border-black dark:border-slate-700 p-2 bg-transparent'
                placeholder="What's your email?"
              />
              {errors.email && <p className='text-red-500'>{errors.email}</p>}

              {/* Subject input */}
              <input
                type='text'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                className='border border-black dark:border-slate-700 p-2 bg-transparent'
                placeholder='Enter subject'
              />
              {errors.subject && (
                <p className='text-red-500'>{errors.subject}</p>
              )}

              {/* Message textarea */}
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                className='border border-black dark:border-slate-700 p-2 bg-transparent'
                rows={4}
                placeholder='Enter your message'
              />
              {errors.message && (
                <p className='text-red-500'>{errors.message}</p>
              )}

              {/* Submit button */}
              <button
                type='submit'
                className='border border-black dark:border-slate-700 p-2 hover:bg-black transition-colors hover:text-white'
              >
                Submit message
              </button>
              {success && (
                <p className='bg-green-700 p-2 text-white'>{success}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
