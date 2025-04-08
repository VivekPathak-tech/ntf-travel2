import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

function HeaderTop() {
  return (
    <div className='header-top relative bg-customBlue w-full text-white flex justify-center items-center'>

      {/* Contact Details */}
      <div className='w-1/2 -z-1 md:z-10 md:flex hidden justify-center gap-4 p-2 items-center'>
        <div>
          <FontAwesomeIcon className='md:mr-1 lg:mr-2' icon={faPhone} />
          <a className="hover:underline" href="tel:01835006768">0183-5006768</a>
        </div>
        <div>
          <FontAwesomeIcon className='md:mr-1 lg:mr-2' icon={faEnvelope} />
          <a className="hover:underline" href="mailto:info@ntftravel.com">info@ntftravel.com</a>
        </div>
        <div>
          <FontAwesomeIcon className='md:mr-1 lg:mr-2' icon={faClock} />
          <span className="hover:underline mr-8">10:00AM - 07:00PM</span>
        </div>
      </div>

      {/* Registration */}
      <div className='md:w-1/2 w-full z-10 p-2'>
        <div className='flex justify-center ml-0 md:ml-2 lg:ml-4 items-center'>
          <FontAwesomeIcon className='mr-2' icon={faUser} />
          <button>Login / Register</button>
          <div className='mx-3 lg:mx-6 md:text-lg font-thin opacity-80 '>|</div>

          <div className='flex gap-2 md:gap-4'>
            <span className="social-title">Follow Us:</span>
            <a href="https://www.facebook.com/ntftravel">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com/ntftravel">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.youtube.com/@ntftravel">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop