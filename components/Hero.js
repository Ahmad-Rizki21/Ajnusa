function Hero() {
    try {
        const [currentSlide, setCurrentSlide] = React.useState(0);
        
        const slides = [
            {
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&h=500&fit=crop",
                title: "Enterprise Network",
                subtitle: "Data Center Infrastructure"
            },
            {
                image: "https://images.unsplash.com/photo-1612467246697-b6b5e878f452?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "VSAT Satellite",
                subtitle: "Global Connectivity"
            },
            {
                image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=700&h=500&fit=crop",
                title: "Satellite Dish",
                subtitle: "Communication Technology"
            },
            {
                image: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "SD-WAN Network",
                subtitle: "Software Defined Solutions"
            },
        ];

        React.useEffect(() => {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }, 4000);
            return () => clearInterval(interval);
        }, [slides.length]);

        const nextSlide = () => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        };

        const prevSlide = () => {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        };

        return (
            <section id="home" data-name="hero" data-file="components/Hero.js" className="gradient-bg min-h-screen flex items-center pt-20 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="text-white slide-in-left">
                            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                                <i className="fas fa-star text-yellow-400 mr-2"></i>
                                <span className="text-sm font-medium">Trusted Since 1000+ • Enterprise Grade</span>
                            </div>
                            
                            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                                Solusi Enterprise
                                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                                    VSAT • SD-WAN • Fiber
                                </span>
                            </h1>
                            
                            <p className="text-lg lg:text-xl mb-8 text-gray-200 leading-relaxed">
                                PT. Artacomindo Jejaring Nusa menyediakan solusi <strong>VSAT, SD-WAN, dan Fiber Optic </strong> 
                                terintegrasi dengan pengalaman lebih dari <strong>10 tahun</strong> melayani enterprise Indonesia.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <button 
                                    onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                                    className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-3 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-300 transform hover:scale-105 transition-all duration-300 shadow-xl"
                                >
                                    <i className="fas fa-rocket mr-2"></i>
                                    Eksplorasi Solusi
                                </button>
                                <button 
                                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                    className="border-2 border-white/50 text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-gray-900 backdrop-blur-sm transition-all duration-300"
                                >
                                    <i className="fas fa-phone mr-2"></i>
                                    Konsultasi Gratis
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-4 text-xs sm:text-sm">
                                <div className="text-center">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                                        <i className="fas fa-satellite-dish text-blue-400"></i>
                                    </div>
                                    <span>VSAT Solutions</span>
                                </div>
                                <div className="text-center">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                                        <i className="fas fa-network-wired text-purple-400"></i>
                                    </div>
                                    <span>SD-WAN Network</span>
                                </div>
                                <div className="text-center">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                                        <i className="fas fa-ethernet text-green-400"></i>
                                    </div>
                                    <span>Fiber Optic</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="slide-in-right">
                            <div className="relative">
                                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                                    <img 
                                        src={slides[currentSlide].image}
                                        alt={slides[currentSlide].title}
                                        className="w-full h-80 lg:h-96 object-cover transition-all duration-500"
                                    />
                                    
                                    <button 
                                        onClick={prevSlide}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all"
                                    >
                                        <i className="fas fa-chevron-left"></i>
                                    </button>
                                    
                                    <button 
                                        onClick={nextSlide}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all"
                                    >
                                        <i className="fas fa-chevron-right"></i>
                                    </button>
                                    
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                        {slides.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentSlide(index)}
                                                className={`w-2 h-2 rounded-full transition-all ${
                                                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl pulse-glow">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            99.9%
                                        </div>
                                        <div className="text-gray-700 font-semibold text-sm">Uptime SLA</div>
                                        <div className="text-xs text-gray-500">Enterprise Grade</div>
                                    </div>
                                </div>

                                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded-full shadow-xl">
                                    <i className="fas fa-shield-alt text-white text-lg"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
                    <div className="animate-bounce">
                        <i className="fas fa-chevron-down text-2xl"></i>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
    }
}
