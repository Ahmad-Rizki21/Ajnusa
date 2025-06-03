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

function PricingHeader() {
    try {
        return (
            <header data-name="pricing-header" data-file="components/PricingHeader.js" 
                className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-4 group">
                            <div className="relative">
                                {/* Subtle glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                            </div>
                            <div className="flex items-center space-x-6">
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
                        </div>

                        <div className="flex items-center space-x-6">
                            <div className="hidden md:flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full">
                                <i className="fas fa-tags text-orange-600"></i>
                                <span className="text-orange-800 font-semibold text-sm">Daftar Harga</span>
                            </div>
                            <button 
                                onClick={() => window.close() || (window.location.href = 'index.html')}
                                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors font-medium"
                            >
                                <i className="fas fa-arrow-left mr-2"></i>
                                Kembali
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        );
    } catch (error) {
        console.error('PricingHeader component error:', error);
        reportError(error);
    }
}
