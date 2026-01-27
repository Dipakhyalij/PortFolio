import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7yf6tty', 'template_7syz0cd', form.current, {
        publicKey: 'o8PMvAsKkQpFMKvyP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='contact'
      className='py-20 bg-dark-200'
    >
      <div className="container mx-auto px-6">
        <h2 className='text-3xl font-bold text-center mb-4'>
          Get In <span className='text-purple'>Touch</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <form ref={form} onSubmit={sendEmail} className='space-y-6'>
              <div>
                <label htmlFor="name" className='block  text-gray-300 mb-2'>Your Name</label>
                <input name="from_name"
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type='text' />
              </div>

              <div>
                <label htmlFor="email" className='block  text-gray-300 mb-2'>Email Address</label>
                <input name="from_email"
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type='email' />
              </div>

              <div>
                <label htmlFor="message" className='block  text-gray-300 mb-2'>Your Message</label>
                <textarea name="message"
                  className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type='text' />
              </div>
              <button type='submit' value="Send" className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'>Send</button>
            </form>
          </div>

          {/* Contact info */}
          <div className='space-y-8'>
            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4 '>
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                <p className='text-gray-400'>Nashik, India</p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4 '>
                <FaEnvelope />
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                <p className='text-gray-400'>dipakpatil200412@gmail.com</p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4 '>
                <FaPhone />
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                <p className='text-gray-400'>+91 8799975679</p>
              </div>
            </div>

            <div className='pt-4'>
              <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
              <div className='flex space-x-4'>
                <a href="https://www.linkedin.com/in/dipak-patil-3b6435253/" className='w-12 h-12 rounded-full bg-dark-400 flex items-center justify-center text-blue hover:bg-blue-400 hover:text-white transition duration-300'>
                  <FaLinkedin />

                </a>
                <a href="https://github.com/Dipakhyalij" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple-400 hover:bg-purple-400 hover:text-white transition duration-300'>
                  <FaGithub />
                </a>

                <a href="https://www.instagram.com/deep_patil_5/" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-pink-400 hover:text-white transition duration-300'>
                  <FaInstagram />
                </a>




              </div>
            </div>


          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact