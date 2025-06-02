function ImageSlider({ slides, autoPlay = true, interval = 4000 }) {
    try {
        const [currentSlide, setCurrentSlide] = React.useState(0);
        const [isAutoPlaying, setIsAutoPlaying] = React.useState(autoPlay);

        React.useEffect(() => {
            if (!isAutoPlaying) return;
            
            const autoSlide = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }, interval);
            
            return () => clearInterval(autoSlide);
        }, [slides.length, interval, isAutoPlaying]);

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
            <div 
                data-name="image-slider" 
                data-file="components/ImageSlider.js"
                className="relative slider-container"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(autoPlay)}
            >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                    
                    <img 
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="w-full h-80 lg:h-96 object-cover slider-transition"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    
                    <button 
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        aria-label="Previous image"
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    
                    <button 
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        aria-label="Next image"
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                    
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                        <div className="bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 mb-3">
                            <h4 className="text-white font-semibold text-sm">{slides[currentSlide].title}</h4>
                            <p className="text-white/80 text-xs">{slides[currentSlide].subtitle}</p>
                        </div>
                        <div className="flex space-x-2 justify-center">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === currentSlide 
                                            ? 'bg-white shadow-lg' 
                                            : 'bg-white/50 hover:bg-white/75'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ImageSlider component error:', error);
        reportError(error);
    }
}
