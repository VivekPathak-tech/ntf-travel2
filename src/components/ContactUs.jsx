import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

function ContactUs() {
    return (
        <div className='flex justify-start flex-col mb-10 '>
            <h3 className="relative before:absolute before:-bottom-4 before:border-b-2 before:border-customOrange before:w-15
            after:absolute after:-bottom-4 after:left-16 after:border-b-2 after:border-customOrange after:w-2.5
            text-2xl font-bold text-white font-TitleFont my-6"
            >Contact Us</h3>
            <div className='flex my-8 flex-col gap-8'>
                {[
                    { icon: faLocationDot, text: '33-A, Street No. 2, Model Town, Amritsar' },
                    { icon: faPhone, text: '0183-5006768', link: 'tel:01835006768' },
                    { icon: faEnvelope, text: 'info@ntftravel.com', link: 'mailto:info@ntftravel.com' },
                ].map(({ icon, text, link }, idx) => (
                    <div className="flex gap-2 items-center" key={idx}>
                        <button className="bg-customOrange rounded-sm text-white size-6 ">
                            <FontAwesomeIcon icon={icon} />
                        </button>
                        {link ? (
                            <a href={link} className="hover:text-customOrange">
                                {text}
                            </a>
                        ) : (
                            <p className="text-white">{text}</p>
                        )}
                    </div>
                ))}

            </div>


        </div>
    )
}

export default ContactUs