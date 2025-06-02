function Footer() {
    try {
        const currentYear = new Date().getFullYear();
        const currentTime = new Date().toLocaleTimeString('id-ID', { 
            timeZone: 'Asia/Jakarta', 
            hour12: false 
        });

        const services = [
            "VSAT Solutions", "SD-WAN Network", "Fiber Optic",
            "Layanan Broadband", "Mobile VSAT", "VNS Service"
        ];

        const socialLinks = [
            { icon: "fab fa-facebook-f", link: "https://www.facebook.com/profile.php?id=100054324456980", color: "hover:bg-blue-600" },
            { icon: "fab fa-twitter", link: "https://x.com/artacomindo", color: "hover:bg-sky-500" },
            { icon: "fab fa-instagram", link: "https://www.instagram.com/artacomindojejaring/", color: "hover:bg-pink-600" }
        ];

        return (
            <footer data-name="footer" data-file="components/Footer.js" 
                className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
                
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 py-16 relative z-10">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
                        
                        {/* Company Info */}
                        <div className="lg:col-span-2 fade-in">
                            <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-16 h-16 bg-white rounded-md"> {/* Added border */}
                                        <img
                                            src="/images/artacom.png"
                                            alt="Artacom Logo"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">Artacom</h3>
                                        <p className="text-sm text-gray-300">Jejaring Nusa</p>
                                    </div>
                                </div>
                            
                            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                                PT. Artacomindo Jejaring Nusa menyediakan solusi <strong>VSAT, SD-WAN, dan Fiber Optic</strong> 
                                terpercaya dengan pengalaman lebih dari <strong>20 tahun</strong> melayani enterprise Indonesia.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <span className="text-sm font-medium">
                                        <i className="fas fa-award text-yellow-400 mr-2"></i>
                                        20+ Years Experience
                                    </span>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <span className="text-sm font-medium">
                                        <i className="fas fa-shield-alt text-green-400 mr-2"></i>
                                        99.9% Uptime SLA
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="slide-in-left">
                            <h4 className="text-xl font-bold mb-6 text-white">
                                <i className="fas fa-cogs text-blue-400 mr-2"></i>
                                Layanan Kami
                            </h4>
                            <ul className="space-y-3">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <a href="#services" 
                                           className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group">
                                            <i className="fas fa-arrow-right text-blue-400 mr-3 text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="slide-in-right">
                            <h4 className="text-xl font-bold mb-6 text-white">
                                <i className="fas fa-phone text-green-400 mr-2"></i>
                                Hubungi Kami
                            </h4>
                            
                            <div className="space-y-4 mb-6">
                                <div className="flex items-center group">
                                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                                        <i className="fas fa-envelope text-blue-400"></i>
                                    </div>
                                    <a href="mailto:info@ajnusa.com" 
                                       className="text-gray-300 hover:text-white transition-colors">
                                        info@ajnusa.com
                                    </a>
                                </div>
                                
                                <div className="flex items-center group">
                                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                                        <i className="fas fa-globe text-purple-400"></i>
                                    </div>
                                    <a href="https://www.ajnusa.com" target="_blank" rel="noopener noreferrer"
                                       className="text-gray-300 hover:text-white transition-colors">
                                        www.ajnusa.com
                                    </a>
                                </div>
                                
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                                        <i className="fas fa-map-marker-alt text-green-400"></i>
                                    </div>
                                    <span className="text-gray-300">Jakarta, Indonesia</span>
                                </div>
                            </div>

                            <div className="flex space-x-3">
                                {socialLinks.map((social, index) => (
                                    <a key={index} href={social.link} target="_blank" rel="noopener noreferrer"
                                       className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}>
                                        <i className={`${social.icon} text-lg`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-700/50 mt-12 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-400 text-sm mb-4 md:mb-0">
                                © {currentYear} PT. Artacomindo Jejaring Nusa. All rights reserved.
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span>Last updated: {currentTime} WIB</span>
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span>System Online</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
    }
}
