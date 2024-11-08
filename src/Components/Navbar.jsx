import React, { useState, useEffect } from 'react';
import Logo from '../images/logo.png';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav
            className={`${isScrolled ? 'fixed bg-black shadow-lg' : 'absolute bg-transparent'
                } top-0 left-0 w-full z-20 p-4 transition duration-300 ease-in-out`}
        >
            <div className="container mx-auto flex justify-between items-center">
                <img src={Logo} alt="Logo" className="h-15 pl-40" />

                {/* Menu Icon for Mobile*/}
                <div
                    className="lg:hidden pr-40 cursor-pointer text-white relative"
                    onClick={toggleMenu}
                    aria-expanded={menuOpen}
                    aria-label="Toggle navigation menu"
                >
                    {menuOpen ? (
                        <span className="text-3xl absolute left-0 top-0 transition-all duration-300 ease-in-out">&times;</span> // X Icon
                    ) : (

                        <span className="text-3xl absolute left-0 top-0 transition-all duration-300 ease-in-out">&#9776;</span> // Menu icon
                    )}

                </div>

                {/* Navigation Links */}
                <ul
                    className={`lg:flex space-x-10 text-white pr-40 ml-0 ${menuOpen ? 'block' : 'hidden'
                        } lg:block transition duration-300 ease-in-out`}
                >
                    {['HEADER', 'FEATURES', 'OFFER', 'ABOUT', 'CONTACT'].map((item) => (
                        <li
                            key={item}
                            className="cursor-pointer px-4 py-2 rounded-md transition duration-300 ease-in-out"
                            style={{ transition: 'background-color 0.3s ease' }}
                            onMouseEnter={(e) => (e.target.style.backgroundColor = 'crimson')}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
