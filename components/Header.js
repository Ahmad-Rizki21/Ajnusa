function Header() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);
        const [isScrolled, setIsScrolled] = React.useState(false);
        const [isLayananOpen, setIsLayananOpen] = React.useState(false);

        React.useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 50);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        const scrollToSection = (sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
                setIsLayananOpen(false);
            }
        };

        const services = [
            "VSAT Solutions", "SD-WAN Network", "Fiber Optic", "Layanan Broadband", "Mobile VSAT", "VNS Service"
        ];

        return (
            <header
                data-name="header"
                data-file="components/Header.js"
                className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white/30 backdrop-blur-sm border-b border-gray-200 shadow-md'
                        : 'bg-white/95 backdrop-blur-sm shadow-lg'
                }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4"> {/* Increased py-2 to py-4 */}
                        <div className="flex items-center space-x-6"> {/* Increased space-x-4 to space-x-6 */}
                            <div className="w-20 h-20">
                                <img src="/images/artacom.png" alt="Artacom Logo" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                    Artacom
                                </h1>
                                <p className="text-sm text-gray-500 font-medium">Jejaring Nusa</p>
                            </div>
                        </div>

                        <nav className="hidden md:flex space-x-16"> {/* Increased space-x-12 to space-x-16 */}
                            {['HOME', 'ABOUT'].map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                                </button>
                            ))}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsLayananOpen(true)}
                                onMouseLeave={() => setIsLayananOpen(false)}
                            >
                                <button
                                    className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
                                >
                                    LAYANAN
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                                </button>
                                {isLayananOpen && (
                                    <div className="absolute top-full mt-3 w-48 bg-white shadow-lg rounded-lg py-3 z-10"> {/* Increased mt-2 to mt-3, py-2 to py-3 */}
                                        {services.map((service, index) => (
                                            <button
                                                key={index}
                                                onClick={() => scrollToSection('services')}
                                                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium" // Increased py-2 to py-3
                                            >
                                                {service}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {['KLIEN', 'CONTACT'].map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                                </button>
                            ))}
                        </nav>

                        <button
                            className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
                            <nav className="py-4 space-y-2"> {/* Increased space-y-1 to space-y-2 */}
                                {['HOME', 'ABOUT', 'LAYANAN', 'KLIEN', 'CONTACT'].map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            scrollToSection(
                                                item.toLowerCase() === 'layanan' ? 'services' : item.toLowerCase()
                                            )
                                        }
                                        className="block w-full text-left px-4 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium" // Increased py-3 to py-4
                                    >
                                        {item}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    )}
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
    }
}