import React, { useState, useEffect } from 'react';

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
            className={`${isScrolled ? 'fixed bg-black shadow-lg' : 'absolute bg-transparent'} top-0 left-0 w-full z-20 p-4 transition duration-300 ease-in-out`}
        >
            <div className="container mx-auto flex justify-between items-center">

                {/* Logo and Text Container */}
                <div className="flex items-center space-x-2">
                    <h1 className="text-white text-3xl font-extrabold tracking-wide flex items-center lg:pl-40 lg:pt-3">
                        <a href="#top" className="font-serif pl-10 pt-5 lg:pl-0" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            ℌ𝔢𝔫𝔞 𝔾𝕪𝕞
                        </a>
                    </h1>
                </div>

                {/* Menu Icon for Mobile */}
                <div
                    className="lg:hidden pr-20 cursor-pointer text-white relative"
                    onClick={toggleMenu}
                    aria-expanded={menuOpen}
                    aria-label="Toggle navigation menu"
                >
                    {menuOpen ? (
                        <span className="text-5xl absolute left-0 top-0 transition-all duration-300 ease-in-out">&times;</span> // X Icon
                    ) : (
                        <span className="text-3xl absolute left-0 top-0 transition-all duration-300 ease-in-out">&#9776;</span> // Menu Icon
                    )}
                </div>

                {/* Desktop Navigation Links */}
                <ul
                    className={`lg:flex space-x-10 text-white pr-40 ml-0 ${menuOpen ? 'hidden' : 'hidden'} lg:block transition duration-300 ease-in-out`}
                >
                    {['HEADER', 'FEATURES', 'OFFER', 'ABOUT', 'CONTACT'].map((item) => (
                        <li
                            key={item}
                            className="cursor-pointer px-4 py-2 rounded-md transition duration-300 ease-in-out"
                            style={{ transition: 'background-color 0.3s ease' }}
                            onMouseEnter={(e) => (e.target.style.backgroundColor = 'crimson')}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
                        >
                            <a href={`#${item.toLowerCase()}`} className="text-white">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

            </div>

            {/* Mobile Navigation Background Box */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-black text-white p-4 z-10 border-b-8 border-red-600">
                    <ul className="space-y-4 text-center">
                        {['HEADER', 'FEATURES', 'OFFER', 'ABOUT', 'CONTACT'].map((item) => (
                            <li key={item} className="cursor-pointer">
                                <a href={`#${item.toLowerCase()}`} className="block py-2">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </nav>
    );
}

export default Navbar;
