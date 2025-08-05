import { useState } from 'react';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navLinks = [
        { name: "Home", href: "" },
        { name: "Financial Services", href: "" },
        { name: "Real Estate Development", href: "" },
        { name: "Digital Transformation", href: "" },
        { name: "About Us", href: "" },
        { name: "Contact", href: "" }
    ];

    return (
        <section className="w-screen bg-white sticky top-0 z-[1000] shadow-sm">
            <div className='w-[90%] lg:w-[85%] m-auto  flex justify-between items-center'>
                <div className='logo'>
                    <img src='/images/logo/logo.webp' className='w-28 p-2' alt="Company Logo" />
                </div>
                
                {/* Desktop Navigation - visible on medium screens and up */}
                <div className="hidden lg:flex gap-6 h-full items-center">
                    {navLinks.map((link, index) => (
                        <div key={index}>
                            <a 
                                href={link.href} 
                                className="relative text-[16px] group text-gray-700 font-medium hover:text-[#c86e3b] transition-colors duration-300"
                            >
                                {link.name}
                                <span className="absolute left-0 bottom-[-6px] w-0 h-1 bg-[#c86e3b] group-hover:w-full transition-all duration-300 ease-in-out"></span>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Mobile menu button - visible on small screens */}
                <button 
                    className="lg:hidden p-2 focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation - appears when menu button is clicked */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white w-full px-4 pb-4">
                    <div className="flex flex-col space-y-3">
                        {navLinks.map((link, index) => (
                            <a 
                                key={index}
                                href={link.href} 
                                className="block py-2 px-4 text-gray-700 font-medium hover:text-[#002885] hover:bg-gray-50 rounded transition-colors duration-300"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}

export default Header;