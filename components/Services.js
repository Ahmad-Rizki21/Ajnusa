function Services() {
    try {
        const [selectedService, setSelectedService] = React.useState(null);

        const services = [
            {
                title: "VSAT Solutions",
                icon: "fas fa-satellite-dish",
                color: "from-blue-500 to-blue-600",
                description: "Solusi komunikasi satelit terdepan untuk konektivitas global",
                features: ["Ka-Band & Ku-Band", "Auto-Pointing System", "Weather Resistant", "24/7 Monitoring"],
                details: {
                    overview: "Teknologi VSAT (Very Small Aperture Terminal) terdepan dengan coverage nasional dan internasional",
                    specifications: ["Bandwidth: 64 Kbps - 100 Mbps", "Latency: <600ms", "Availability: 99.5%", "Antenna: 0.75m - 3.8m"],
                    applications: ["Remote Office Connectivity", "Disaster Recovery", "Maritime Communications", "Mining Operations"]
                }
            },
            {
                title: "SD-WAN Network", 
                icon: "fas fa-network-wired",
                color: "from-purple-500 to-purple-600",
                description: "Software-Defined Wide Area Network untuk optimasi jaringan enterprise",
                features: ["Centralized Management", "Dynamic Path Selection", "Security Integration", "Cloud-Ready"],
                details: {
                    overview: "Solusi SD-WAN yang mengoptimalkan performa jaringan dengan intelligent routing dan centralized control",
                    specifications: ["Throughput: Up to 10 Gbps", "Sites: Unlimited", "Protocols: MPLS, Internet, LTE", "Latency: <50ms"],
                    applications: ["Multi-Branch Connectivity", "Cloud Migration", "Application Optimization", "Cost Reduction"]
                }
            },
            {
                title: "Fiber Optic",
                icon: "fas fa-ethernet", 
                color: "from-green-500 to-green-600",
                description: "Koneksi fiber optic berkecepatan tinggi dengan reliabilitas maksimal",
                features: ["Up to 100 Gbps", "Low Latency", "High Reliability", "Scalable Bandwidth"],
                details: {
                    overview: "Infrastruktur fiber optic dengan teknologi terbaru untuk kebutuhan bandwidth tinggi dan latensi rendah",
                    specifications: ["Speed: 10 Mbps - 100 Gbps", "Distance: Up to 80km", "Uptime: 99.9%", "Fiber Type: Single/Multi-mode"],
                    applications: ["Data Center Connectivity", "High-Speed Internet", "Video Streaming", "Cloud Services"]
                }
            },
            {
                title: "Layanan Broadband",
                icon: "fas fa-wifi",
                color: "from-red-500 to-red-600", 
                description: "Teknologi TDM-TDMA dengan bandwidth besar untuk aplikasi TCP/IP",
                features: ["Up to 96 Mbps Outroute", "Up to 1.4 Mbps Inroute", "Interface Ethernet", "Protocol TCP/IP"],
                details: {
                    overview: "Layanan broadband satelit dengan teknologi TDM-TDMA untuk aplikasi bisnis dan enterprise",
                    specifications: ["Outbound: Up to 96 Mbps", "Inbound: Up to 1.4 Mbps", "Interface: Ethernet", "CIR: Guaranteed"],
                    applications: ["Internet Access", "VoIP Services", "Video Conferencing", "Remote Access"]
                }
            },
            {
                title: "Mobile VSAT",
                icon: "fas fa-satellite",
                color: "from-orange-500 to-orange-600",
                description: "VSAT mobile dengan teknologi AUPC dan ACM untuk mobilitas tinggi", 
                features: ["64 kbps – 2 Mbps", "Coverage Indonesia", "One Push Antenna", "24x7x365 Service"],
                details: {
                    overview: "Solusi komunikasi mobile yang dapat beroperasi dari berbagai lokasi dengan setup yang mudah",
                    specifications: ["Speed: 64 Kbps - 2 Mbps", "Setup Time: <15 minutes", "Power: 12V DC", "Weight: <50kg"],
                    applications: ["Emergency Response", "Field Operations", "Temporary Sites", "Event Communications"]
                }
            },
            {
                title: "VNS Service",
                icon: "fas fa-shield-alt",
                color: "from-indigo-500 to-indigo-600",
                description: "Virtual Network Service untuk konektivitas aman antar lokasi",
                features: ["Any-to-Any Connectivity", "QOS & SLA", "Network Monitoring", "High Security"],
                details: {
                    overview: "Jaringan privat virtual yang aman dengan enkripsi end-to-end dan monitoring 24/7",
                    specifications: ["Encryption: AES-256", "Tunneling: IPSec", "QoS: Guaranteed", "Monitoring: Real-time"],
                    applications: ["Branch Office Connection", "Remote Work", "Secure Data Transfer", "Cloud Access"]
                }
            }
        ];

        return (
            <section id="services" data-name="services" data-file="components/Services.js" className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20 fade-in">
                        <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            <i className="fas fa-cogs mr-2"></i>
                            Layanan Profesional
                        </div>
                        <h2 className="text-5xl font-bold text-gray-800 mb-6">Solusi Teknologi Terdepan</h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8 rounded-full"></div>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            Artacom menyediakan solusi <strong>VSAT, SD-WAN, dan Fiber Optic</strong> terpadu 
                            untuk kebutuhan konektivitas enterprise modern.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div 
                                key={index} 
                                className="service-card bg-white p-8 rounded-3xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
                                onClick={() => setSelectedService(service)}
                            >
                                <div className="text-center mb-8">
                                    <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                                        <i className={`${service.icon} text-white text-3xl`}></i>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 mb-6">{service.description}</p>
                                </div>
                                <ul className="space-y-3 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-600">
                                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                                <i className="fas fa-check text-green-600 text-xs"></i>
                                            </div>
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-center">
                                    <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                                        <i className="fas fa-info-circle mr-2"></i>
                                        Detail Lengkap
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {selectedService && (
                        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="flex items-center">
                                            <div className={`w-16 h-16 bg-gradient-to-br ${selectedService.color} rounded-2xl flex items-center justify-center mr-4`}>
                                                <i className={`${selectedService.icon} text-white text-2xl`}></i>
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-bold text-gray-800">{selectedService.title}</h3>
                                                <p className="text-gray-600">{selectedService.description}</p>
                                            </div>
                                        </div>
                                        <button 
                                            onClick={() => setSelectedService(null)}
                                            className="text-gray-400 hover:text-gray-600 text-2xl"
                                        >
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-8">
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-800 mb-4">Overview</h4>
                                            <p className="text-gray-600 leading-relaxed">{selectedService.details.overview}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-800 mb-4">Specifications</h4>
                                            <ul className="space-y-2">
                                                {selectedService.details.specifications.map((spec, idx) => (
                                                    <li key={idx} className="flex items-center text-gray-600">
                                                        <i className="fas fa-cog text-blue-500 mr-2"></i>
                                                        <span className="text-sm">{spec}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-800 mb-4">Applications</h4>
                                            <ul className="space-y-2">
                                                {selectedService.details.applications.map((app, idx) => (
                                                    <li key={idx} className="flex items-center text-gray-600">
                                                        <i className="fas fa-arrow-right text-green-500 mr-2"></i>
                                                        <span className="text-sm">{app}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-8 text-center">
                                        <button 
                                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                                        >
                                            <i className="fas fa-phone mr-2"></i>
                                            Konsultasi Sekarang
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        );
    } catch (error) {
        console.error('Services component error:', error);
        reportError(error);
    }
}
