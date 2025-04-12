import React from 'react';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

const Header = () => {
    return (
        <>
        <header className='sticky top-0 bg-white z-50'>
            {/* Social Media */}
            <HeaderTop /> 

            {/* Main */}
            <HeaderBottom />
        </header>
        </>
    );
};

export default Header;