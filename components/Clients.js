function Clients() {
    try {
        const clientsGroup1 = [
            { name: "Alfamart", logo: "../klien/ALFAMART_LOGO_BARU.png" },
            { name: "Bakti", logo: "../klien/klien-4.png" },
            { name: "JSC", logo: "../klien/klien-5.png" },
            { name: "KitaMart", logo: "../klien/kitamart.png" },
            { name: "Government", logo: "../klien/klien-7.png" },
            { name: "Sodago", logo: "../klien/shodaqo.png" },
            { name: "Mandiri", logo: "../klien/Mandiri-Syariah-Bank-Logo.png" },
            { name: "Isuzu", logo: "../klien/klien-10.png" },
            { name: "BankDKI", logo: "../klien/bankdki.jpg" },
            { name: "Lawson", logo: "../klien/lawson6393.jpg" }
        ];

        const clientsGroup2 = [
            { name: "Mikrotik", logo: "../klien/MikroTik-Logo.jpg" },
            { name: "Cisco", logo: "../klien/Cisco-Logo.png" },
            { name: "Peplink", logo: "../klien/peplink_2.png" },
            { name: "Maipu", logo: "../klien/logo_en.png" },
            { name: "Hughes", logo: "../klien/hughes-network-systems-2-logo-png-transparent.png" },
            { name: "Dell", logo: "../klien/dell.png" }
        ];

        // Duplicate each group for seamless infinite scroll
        const extendedGroup1 = [...clientsGroup1, ...clientsGroup1];
        const extendedGroup2 = [...clientsGroup2, ...clientsGroup2];

        return (
            <section id="clients" data-name="clients" data-file="components/Clients.js" className="py-20 bg-gradient-to-r from-gray-100 to-gray-200">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 fade-in">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Klien dan Teknologi</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                        <p className="text-lg text-gray-600">
                            Dipercaya oleh berbagai perusahaan dan instansi terkemuka di Indonesia
                        </p>
                    </div>

                    <div className="relative overflow-hidden mb-12">
                        <div className="flex animate-marquee-left">
                            {extendedGroup1.map((client, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 mx-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                                >
                                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-100 flex items-center justify-center h-36 w-36">
                                        <img
                                            src={client.logo}
                                            alt={client.name}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee-right">
                            {extendedGroup2.map((client, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 mx-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                                >
                                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-100 flex items-center justify-center h-36 w-36">
                                        <img
                                            src={client.logo}
                                            alt={client.name}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-12 fade-in">
                        <p className="text-gray-600 text-lg">
                            Dan masih banyak klien lainnya yang mempercayai layanan kami
                        </p>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes marquee-left {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    @keyframes marquee-right {
                        0% {
                            transform: translateX(-50%);
                        }
                        100% {
                            transform: translateX(0);
                        }
                    }
                    .animate-marquee-left {
                        display: flex;
                        animation: marquee-left 20s linear infinite;
                    }
                    .animate-marquee-right {
                        display: flex;
                        animation: marquee-right 20s linear infinite;
                    }
                    .animate-marquee-left:hover,
                    .animate-marquee-right:hover {
                        animation-play-state: paused;
                    }
                `}</style>
            </section>
        );
    } catch (error) {
        console.error('Clients component error:', error);
        reportError(error);
    }
}