import React from 'react'
import logo from '../../../assets/ntf-travel-logo-rectangle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import Button from '../../Button';
import ContactUs from '../../ContactUs';
import './Header.css';

function HeaderBottom() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth >= 768) {
      setisMenuOpen(!isMenuOpen);
      // console.log(window.innerWidth);
    } else {
      setisMenuOpen(false);
    }
  }
  const toggleSearch = () => {
    if (window.innerWidth >= 768) {
      setIsSearchOpen(!isSearchOpen);
    } else {
      setIsSearchOpen(false);
    }
  }

  return (
    <>
      <div className='grid w-full grid-cols-2 md:grid-cols-5'>
        <div className='flex items-center w-full justify-center bg-customBlue p-2 [clip-path:polygon(0_0,calc(100%-40px)_0,100%_100%,0%_100%)] '>
          <a href='/'> <img src={logo} alt="NTF Travel Logo" className='h-[50px] s:h-[70px] m-0 ' /> </a>
        </div>

        <div className='hidden md:flex col-span-0 md:col-span-3 items-center justify-center'>
          <ul className='flex gap-10 font-medium'>
            <li>
              <a href="/">Home</a>
            </li>

            <li className='menu'>
              <a href="/about">About Us</a>
              <ul className="sub-menu">
                <li
                  className="">
                  <a href="/">Why Choose Us</a>
                </li>
                <li
                  className="">
                  <a href="/">Testimonials</a>
                </li>
                <li
                  className="">
                  <a href="/">Success Stories</a>
                </li>
              </ul>
            </li>

            <li className='menu'>
              <a href="/">Travel Booking</a>
              <ul className="sub-menu">
                <li>
                  <a href="/">Flight Ticket</a>
                </li>
                <li>
                  <a href="/">Hotel Booking</a>
                </li>
                <li>
                  <a href="/">Travel Insurance</a>
                </li>
              </ul>
            </li>

            <li className="menu">
              <a href="/">Holiday Packages</a>
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="/">Holiday In India </a>

                  <ul className="sub-menu-item">
                    <li>
                      <a href="/">Kashmir</a>
                    </li>
                    <li>
                      <a href="/">Sikkim</a>
                    </li>
                    <li>
                      <a href="/">Munar</a>
                    </li>
                    <li>
                      <a href="/">Rajasthan</a>
                    </li>
                    <li>
                      <a href="/">Himachal pradesh</a>
                    </li>
                    <li>
                      <a href="/">Kerala</a>
                    </li>
                    <li>
                      <a href="/">Darjeeling</a>
                    </li>
                    <li>
                      <a href="/">Manali</a>
                    </li>
                    <li>
                      <a href="/">Goa</a>
                    </li>
                    <li>
                      <a href="/">Punjab</a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item">
                  <a href="/">International Holidays</a>

                  <ul className="sub-menu-item">
                    <li>
                      <a href="">UK</a>
                    </li>
                    <li>
                      <a href="">Europe</a>
                    </li>
                    <li>
                      <a href="">Canada</a>
                    </li>
                    <li>
                      <a href="">USA</a>
                    </li>
                    <li>
                      <a href="/">New Zealand</a>
                    </li>
                    <li>
                      <a href="/">Australia</a>
                    </li>
                    <li>
                      <a href="/">Gulf Countries</a>
                    </li>
                  </ul>
                </li>

                <li className='menu-item'>
                  <a href="/">Honeymoon Packages</a>
                  <ul className="sub-menu-item">
                    <li>
                      <a href="/">Thailand</a>
                    </li>
                    <li>
                      <a href="/">Bali</a>
                    </li>
                    <li>
                      <a href="/">Maldives</a>
                    </li>
                    <li>
                      <a href="/">Dubai</a>
                    </li>
                    <li>
                      <a href="/">Switzerland </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className='menu'>
              <a href="/">Blog</a>
              <ul className="sub-menu">
                <li>
                  <a href="/"> Blog Category </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/contactUs">Contact Us</a>
            </li>

          </ul>
        </div>

        <div className='flex items-center justify-end mr-4 md:justify-center md:mr-0 gap-2'>
          <Button onClick={toggleSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
          <Button onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </div>
      </div>

      {window.innerWidth >= 768 &&
        <div onClick={toggleMenu} className={` ${isMenuOpen ? 'block' : 'hidden'} fixed top-0 right-0 w-full h-full z-20 bg-[#000000e0] text-white`}>
          <div onClick={(e) => e.stopPropagation()} className='absolute top-0 right-0 w-[450PX] h-full max-h-fit overflow-auto no-scrollbar bg-[#161921]'>
            <Button className='absolute top-4 right-4 hover:rotate-180 text-white' onClick={toggleMenu}>
              <FontAwesomeIcon style={{ fontSize: '22px' }} icon={faTimes} />
            </Button>
            <div className='flex flex-col justify-center mt-20 mx-8 '>
              <img src="src\assets\white-logo.png" alt="ntf-travel-logo" />
              <p className='my-6'>Established in 2021, NTF is a brainchild of travel lovers and industry explorers. Our goal is to make travelling a friendly experience for your pockets and souls. Being licensed and IATA-certified, NTF is one of the best travel companies in India.</p>
              <div className='flex gap-4 my-4'>
                <Button>
                  <a href="https://www.facebook.com/ntftravel">
                    <FontAwesomeIcon style={{ fontSize: '20px' }} icon={faFacebookF} />
                  </a>
                </Button>
                <Button>
                  <a href="https://www.instagram.com/ntftravel">
                    <FontAwesomeIcon style={{ fontSize: '20px' }} icon={faInstagram} />
                  </a>
                </Button>
                <Button>
                  <a href="https://www.youtube.com/@ntftravel">
                    <FontAwesomeIcon style={{ fontSize: '20px' }} icon={faYoutube} />
                  </a>
                </Button>
              </div>
              <ContactUs></ContactUs>

            </div>
          </div>
        </div>
      }

      {window.innerWidth >= 768 &&
        <div onClick={toggleSearch} className={` ${isSearchOpen ? 'block' : 'hidden'} fixed top-0 right-0 w-full h-full z-20 bg-[#000000e8] text-white`}>
          <Button className='absolute top-4 right-4 hover:rotate-180 text-white' onClick={toggleSearch}>
            <FontAwesomeIcon style={{ fontSize: '22px' }} icon={faTimes} />
          </Button>
          <div className='size-full flex justify-center items-center '>
            <div onClick={(e) => e.stopPropagation()}>
              <form className='w-[700px] h-[70px] border-2 border-customOrange rounded-full flex items-center justify-around p-2'
                action="post">
                <input type="text" className='w-[80%] text-xl outline-none h-full' placeholder='What are you looking for?' />
                <button type='submit' className='w-[50px] h-full rounded-full cursor-pointer'>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className='hover:scale-110 text-white' style={{ fontSize: '22px' }} />
                </button>
              </form>
            </div>
          </div>
        </div>}
    </>
  )
}

export default HeaderBottom