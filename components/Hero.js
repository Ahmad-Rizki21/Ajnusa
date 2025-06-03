function Hero() {
    try {
        const [currentSlide, setCurrentSlide] = React.useState(0);
        const [isLoaded, setIsLoaded] = React.useState(false);
        
        const slides = [
            {
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",
                title: "Enterprise Network",
                subtitle: "Data Center Infrastructure",
                description: "Solusi infrastruktur data center enterprise dengan teknologi terdepan"
            },
            {
                image: "https://images.unsplash.com/photo-1612467246697-b6b5e878f452?w=800&h=600&fit=crop&q=80",
                title: "VSAT Satellite",
                subtitle: "Global Connectivity",
                description: "Konektivitas satelit VSAT untuk jangkauan global yang handal"
            },
            {
                image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop&q=80",
                title: "Satellite Dish",
                subtitle: "Communication Technology",
                description: "Teknologi komunikasi satelit dengan performa tinggi"
            },
            {
                image: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?w=800&h=600&fit=crop&q=80",
                title: "SD-WAN Network",
                subtitle: "Software Defined Solutions",
                description: "Solusi jaringan software-defined untuk enterprise modern"
            },
        ];

        React.useEffect(() => {
            setIsLoaded(true);
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }, 6000); // Increased duration for better UX
            return () => clearInterval(interval);
        }, [slides.length]);

        const nextSlide = () => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        };

        const prevSlide = () => {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        };

        const goToSlide = (index) => {
            setCurrentSlide(index);
        };

        return (
            <section id="home" className="gradient-bg min-h-screen flex items-center pt-20 relative overflow-hidden">
                {/* Enhanced Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/30"></div>
                
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-1 h-1 bg-blue-300/30 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-300/25 rounded-full animate-ping"></div>
                </div>

                <div className="container mx-auto px-4 relative z-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="text-white slide-in-left z-30">
                            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
                                <i className="fas fa-star text-yellow-400 mr-2 animate-pulse"></i>
                                <span className="text-sm font-medium">Trusted Since 1000+ • Enterprise Grade</span>
                            </div>
                            
                            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                                Solusi Enterprise
                                <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent animate-pulse">
                                    VSAT • SD-WAN • Fiber
                                </span>
                            </h1>
                            
                            <p className="text-lg lg:text-xl mb-8 text-gray-200 leading-relaxed">
                                PT. Artacomindo Jejaring Nusa menyediakan solusi <strong className="text-yellow-300">VSAT, SD-WAN, dan Fiber Optic</strong> 
                                terintegrasi dengan pengalaman lebih dari <strong className="text-orange-300">10 tahun</strong> melayani enterprise Indonesia.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <button 
                                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="group bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-3 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-300 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                                >
                                    <i className="fas fa-rocket mr-2 group-hover:animate-bounce"></i>
                                    Eksplorasi Solusi
                                </button>
                                <button 
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="group border-2 border-white/50 text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-gray-900 backdrop-blur-sm transition-all duration-300 hover:border-white"
                                >
                                    <i className="fas fa-phone mr-2 group-hover:animate-pulse"></i>
                                    Konsultasi Gratis
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-4 text-xs sm:text-sm">
                                <div className="text-center group hover:scale-105 transition-transform duration-300">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:from-blue-400/30 group-hover:to-blue-600/30 transition-all duration-300">
                                        <i className="fas fa-satellite-dish text-blue-400 text-lg group-hover:scale-110 transition-transform duration-300"></i>
                                    </div>
                                    <span className="group-hover:text-blue-300 transition-colors duration-300">VSAT Solutions</span>
                                </div>
                                <div className="text-center group hover:scale-105 transition-transform duration-300">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:from-purple-400/30 group-hover:to-purple-600/30 transition-all duration-300">
                                        <i className="fas fa-network-wired text-purple-400 text-lg group-hover:scale-110 transition-transform duration-300"></i>
                                    </div>
                                    <span className="group-hover:text-purple-300 transition-colors duration-300">SD-WAN Network</span>
                                </div>
                                <div className="text-center group hover:scale-105 transition-transform duration-300">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:from-green-400/30 group-hover:to-green-600/30 transition-all duration-300">
                                        <i className="fas fa-ethernet text-green-400 text-lg group-hover:scale-110 transition-transform duration-300"></i>
                                    </div>
                                    <span className="group-hover:text-green-300 transition-colors duration-300">Fiber Optic</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Enhanced Slider Section */}
                        <div className="slide-in-right relative z-10">
                            <div className="relative group">
                                {/* Main Slider Container */}
                                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                                    {/* Background Glow Effect */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    {/* Slider Container */}
                                    <div className="relative bg-gradient-to-br from-gray-900/20 to-black/20 rounded-3xl overflow-hidden backdrop-blur-sm">
                                        <div className="slider-container relative h-96 lg:h-[28rem]">
                                            {slides.map((slide, index) => (
                                                <div
                                                    key={index}
                                                    className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out ${
                                                        index === currentSlide 
                                                            ? 'opacity-100 scale-100 z-10 translate-x-0' 
                                                            : index < currentSlide 
                                                                ? 'opacity-0 scale-95 z-0 -translate-x-full' 
                                                                : 'opacity-0 scale-95 z-0 translate-x-full'
                                                    }`}
                                                >
                                                    <img 
                                                        src={slide.image}
                                                        alt={slide.title}
                                                        className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                                                        loading="lazy"
                                                    />
                                                    {/* Image Overlay with Info */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                                        <h3 className="text-xl font-bold mb-1">{slide.title}</h3>
                                                        <p className="text-sm text-gray-200 mb-2">{slide.subtitle}</p>
                                                        <p className="text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                            {slide.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        
                                        {/* Enhanced Navigation Buttons */}
                                        <button 
                                            onClick={prevSlide}
                                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110 group/btn"
                                        >
                                            <i className="fas fa-chevron-left text-lg group-hover/btn:animate-pulse"></i>
                                        </button>
                                        
                                        <button 
                                            onClick={nextSlide}
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110 group/btn"
                                        >
                                            <i className="fas fa-chevron-right text-lg group-hover/btn:animate-pulse"></i>
                                        </button>
                                        
                                        {/* Enhanced Dot Navigation */}
                                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                                            {slides.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => goToSlide(index)}
                                                    className={`transition-all duration-300 rounded-full border ${
                                                        index === currentSlide 
                                                            ? 'w-8 h-3 bg-white border-white' 
                                                            : 'w-3 h-3 bg-white/40 border-white/40 hover:bg-white/60 hover:scale-125'
                                                    }`}
                                                />
                                            ))}
                                        </div>

                                        {/* Slide Progress Bar */}
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-white/20">
                                            <div 
                                                className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-1000 ease-linear"
                                                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Enhanced Statistics Badge - Repositioned to the right */}
                                <div className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/20">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            99.9%
                                        </div>
                                        <div className="text-gray-700 font-semibold text-sm">Uptime SLA</div>
                                        <div className="text-xs text-gray-500">Enterprise Grade</div>
                                    </div>
                                </div>

                                {/* Enhanced Security Badge */}
                                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-full shadow-xl">
                                    <i className="fas fa-shield-alt text-white text-2xl animate-pulse"></i>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute top-1/4 -right-4 w-3 h-3 bg-yellow-400/60 rounded-full animate-bounce"></div>
                                <div className="absolute bottom-1/4 -left-2 w-2 h-2 bg-blue-400/60 rounded-full animate-ping"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-300">
                    <div className="animate-bounce cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                        <i className="fas fa-chevron-down text-2xl"></i>
                        <div className="text-xs mt-2 font-medium">Scroll Down</div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                <div className="text-center">
                    <i className="fas fa-exclamation-triangle text-4xl text-yellow-400 mb-4"></i>
                    <h2 className="text-xl font-bold mb-2">Terjadi Kesalahan</h2>
                    <p className="text-gray-400">Mohon refresh halaman</p>
                </div>
            </div>
        );
    }
}