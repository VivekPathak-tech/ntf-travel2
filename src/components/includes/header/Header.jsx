import React from 'react';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

const Header = () => {
    return (
        <>
        <header>
            {/* Social Media */}
            <HeaderTop /> 

            {/* Main */}
            <HeaderBottom />
        </header>
        </>
    );
};

export default Header;