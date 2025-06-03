function PricingContent() {
    try {
        const packages = [
            {
                name: 'Artacom-1',
                download: '20 Mbps',
                upload: '05 Mbps',
                price: '2.050.000',
                popular: false,
                features: ['Unlimited Data', '24/7 Support', 'Weather Resistant', 'Enterprise Grade']
            },
            {
                name: 'Artacom-2',
                download: '35 Mbps',
                upload: '05 Mbps',
                price: '2.780.000',
                popular: true,
                features: ['Unlimited Data', '24/7 Support', 'Weather Resistant', 'Enterprise Grade', 'Priority Support']
            },
            {
                name: 'Artacom-3',
                download: '50 Mbps',
                upload: '05 Mbps',
                price: '6.680.000',
                popular: false,
                features: ['Unlimited Data', '24/7 Support', 'Weather Resistant', 'Enterprise Grade', 'Dedicated Line']
            },
            {
                name: 'Artacom-4',
                download: '60 Mbps',
                upload: '05 Mbps',
                price: '10.540.000',
                popular: false,
                features: ['Unlimited Data', '24/7 Support', 'Weather Resistant', 'Enterprise Grade', 'High Performance']
            },
            {
                name: 'Artacom-5',
                download: '70 Mbps',
                upload: '15 Mbps',
                price: '24.840.000',
                popular: false,
                features: ['Unlimited Data', '24/7 Support', 'Weather Resistant', 'Enterprise Grade', 'Premium Support']
            },
            {
                name: 'Artacom-6',
                download: '100 Mbps',
                upload: '20 Mbps',
                price: '49.140.000',
                popular: false,
                features: ['Unlimited Data', '24/7 Support', 'Weather Resistant', 'Enterprise Grade', 'Maximum Performance']
            }
        ];

        const packages_fo = [
            {
                name: 'Broadband UpTo 10 Mbps',
                download: 'Up to 10 Mbps',
                upload: 'Up to 10 Mbps',
                price: '166,500',
                popular: false,
                features: ['Unlimited Data', '24/7 Support', 'Harga Sudah termasuk PPN 11%', 'Bebas kuota tanpa FUP', 'WiFi router standar']
            },
            {
                name: 'Broadband UpTo 20 Mbps',
                download: 'Up to 20 Mbps',
                upload: 'Up to 20 Mbps',
                price: '231,990',
                popular: true,
                features: ['Unlimited Data', '24/7 Support', 'Harga Sudah termasuk PPN 11%', 'Bebas kuota tanpa FUP', 'WiFi router standar']
            },
            {
                name: 'Broadband UpTo 30 Mbps',
                download: 'Up to 30 Mbps',
                upload: 'Up to 30 Mbps',
                price: '276,390',
                popular: false,
                features: ['Unlimited Data', '24/7 Support', 'Harga Sudah termasuk PPN 11%', 'Bebas kuota tanpa FUP', 'WiFi router standar']
            },
            {
                name: 'Broadband UpTo 50 Mbps',
                download: 'Up to 50 Mbps',
                upload: 'Up to 50 Mbps',
                price: '321,789',
                popular: false,
                features: ['Unlimited Data', '24/7 Support', 'Harga Sudah termasuk PPN 11%', 'Bebas kuota tanpa FUP', 'WiFi router standar']
            },

        ];

        const formatPrice = (price) => {
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        };

        React.useEffect(() => {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('animate');
                }, index * 100);
            });
        }, []);

        return (
            <main data-name="pricing-content" data-file="components/PricingContent.js" className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
                {/* Hero Section */}
                <section className="gradient-bg text-white py-20">
                    <div className="container mx-auto px-4 text-center">
                        <div className="fade-in">
                            <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6">
                                Artacom Ka-Band Speed Base
                            </h1>
                            <p className="hero-subtitle text-xl md:text-2xl mb-8 text-orange-100">
                                Paket VSAT Berkecepatan Tinggi untuk Kebutuhan Enterprise
                            </p>
                            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                                <i className="fas fa-satellite-dish mr-3 text-2xl"></i>
                                <span className="font-semibold">6 Pilihan Paket Kecepatan</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Cards */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pricing-grid">
                            {packages.map((pkg, index) => (
                                <div key={index} className={`pricing-card bg-white rounded-3xl shadow-xl p-8 fade-in ${
                                    pkg.popular ? 'ring-4 ring-orange-500 ring-opacity-50 relative' : ''
                                }`}>
                                    {pkg.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <div className="popular-badge bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                                                <i className="fas fa-star mr-1"></i>
                                                Paling Populer
                                            </div>
                                        </div>
                                    )}
                                    
                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-6">{pkg.name}</h3>
                                        
                                        <div className="flex justify-center items-center space-x-6 mb-6">
                                            <div className="text-center">
                                                <div className="text-red-500 font-bold text-lg flex items-center justify-center">
                                                    <i className="fas fa-download mr-2"></i>
                                                    {pkg.download}
                                                </div>
                                                <div className="text-xs text-gray-500 mt-1">Download</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-green-500 font-bold text-lg flex items-center justify-center">
                                                    <i className="fas fa-upload mr-2"></i>
                                                    {pkg.upload}
                                                </div>
                                                <div className="text-xs text-gray-500 mt-1">Upload</div>
                                            </div>
                                        </div>
                                        
                                        <div className="text-center">
                                            <div className="text-4xl font-bold price-highlight mb-2">
                                                Rp {formatPrice(pkg.price)}
                                            </div>
                                            <div className="text-gray-500 font-medium">/Bulan</div>
                                        </div>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center">
                                                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                                    <i className="fas fa-check text-green-600 text-xs"></i>
                                                </div>
                                                <span className="text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                                        pkg.popular 
                                            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-lg transform hover:scale-105' 
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                                    }`}>
                                        <i className="fas fa-shopping-cart mr-2"></i>
                                        Pilih Paket
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Custom Package Section */}
                        <div className="mt-16 text-center fade-in">
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-3xl shadow-xl max-w-4xl mx-auto">
                                <h3 className="text-3xl font-bold mb-4">Butuh Paket Custom?</h3>
                                <p className="text-xl mb-6">
                                    Kami menyediakan solusi khusus sesuai kebutuhan spesifik perusahaan Anda
                                </p>
                                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
                                    <i className="fas fa-phone mr-2"></i>
                                    Konsultasi Gratis
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FO Details Harga */}
                <section className="gradient-bg text-white py-20">
                    <div className="container mx-auto px-4 text-center">
                        <div className="fade-in">
                            <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6">
                                Artacom Fiber Optic Rusun dan Perumahan
                            </h1>
                            <p className="hero-subtitle text-xl md:text-2xl mb-8 text-orange-100">
                                Paket Internet Rumahan
                            </p>
                            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                                <i className="fas fa-satellite-dish mr-3 text-2xl"></i>
                                <span className="font-semibold">4 Pilihan Paket Kecepatan</span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* FO Details Harga */}

                {/* FO Details Harga */}
        <section className="gradient-bg text-white py-20">
            <div className="container mx-auto px-4 text-center">
                <div className="fade-in">
                    <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6">
                        Artacom Fiber Optic Rusun dan Perumahan
                    </h1>
                    <p className="hero-subtitle text-xl md:text-2xl mb-8 text-orange-100">
                        Paket Internet Rumahan
                    </p>
                    <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                        <i className="fas fa-satellite-dish mr-3 text-2xl"></i>
                        <span className="font-semibold">4 Pilihan Paket Kecepatan</span>
                    </div>
                </div>
            </div>
        </section>

        {/* Koneten FO */}
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pricing-grid">
                    {packages_fo.map((pkg, index) => (
                        <div key={index} className={`pricing-card bg-white rounded-3xl shadow-xl p-8 fade-in ${
                            pkg.popular ? 'ring-4 ring-orange-500 ring-opacity-50 relative' : ''
                        }`}>
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="popular-badge bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                                        <i className="fas fa-star mr-1"></i>
                                        Paling Populer
                                    </div>
                                </div>
                            )}
                            
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">{pkg.name}</h3>
                                
                                <div className="flex justify-center items-center space-x-6 mb-6">
                                    <div className="text-center">
                                        <div className="text-red-500 font-bold text-lg flex items-center justify-center">
                                            <i className="fas fa-download mr-2"></i>
                                            {pkg.download}
                                        </div>
                                        <div className="text-xs text-gray-500 mt-1">Download</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-green-500 font-bold text-lg flex items-center justify-center">
                                            <i className="fas fa-upload mr-2"></i>
                                            {pkg.upload}
                                        </div>
                                        <div className="text-xs text-gray-500 mt-1">Upload</div>
                                    </div>
                                </div>
                                
                                <div className="text-center">
                                    <div className="text-4xl font-bold price-highlight mb-2">
                                        Rp {formatPrice(pkg.price)}
                                    </div>
                                    <div className="text-gray-500 font-medium">/Bulan</div>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                            <i className="fas fa-check text-green-600 text-xs"></i>
                                        </div>
                                        <span className="text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                                pkg.popular 
                                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-lg transform hover:scale-105' 
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                            }`}>
                                <i className="fas fa-shopping-cart mr-2"></i>
                                Pilih Paket
                            </button>
                        </div>
                    ))}
                </div>

                {/* Custom Package Section */}
                {/* <div className="mt-16 text-center fade-in">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-3xl shadow-xl max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold mb-4">Butuh Paket Yanglainnya ?</h3>
                        <p className="text-xl mb-6">
                            Kami menyediakan solusi khusus sesuai kebutuhan spesifik perusahaan Anda
                        </p>
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
                            <i className="fas fa-phone mr-2"></i>
                            Konsultasi Gratis
                        </button>
                    </div>
                </div> */}
            </div>
        </section>




            </main>
            
        );
    } catch (error) {
        console.error('PricingContent component error:', error);
        reportError(error);
    }
}
