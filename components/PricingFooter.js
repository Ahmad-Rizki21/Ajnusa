function PricingFooter() {
    try {
        const currentYear = new Date().getFullYear();

        return (
            <footer data-name="pricing-footer" data-file="components/PricingFooter.js" 
                className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
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
                            <p className="text-gray-400 text-sm">
                                Solusi VSAT terpercaya untuk kebutuhan enterprise dengan pengalaman 10+ tahun.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
                            <div className="space-y-2 text-gray-400 text-sm">
                                <div className="flex items-center">
                                    <i className="fas fa-envelope mr-3"></i>
                                    <span>info@ajnusa.com</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-globe mr-3"></i>
                                    <span>www.ajnusa.com</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-map-marker-alt mr-3"></i>
                                    <span>Jakarta, Indonesia</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Informasi</h4>
                            <div className="space-y-2 text-gray-400 text-sm">
                                <p>Harga dapat berubah sewaktu-waktu</p>
                                <p>Harga belum termasuk PPN</p>
                                <p>Konsultasi gratis untuk paket custom</p>
                                <p>Garansi uptime 99.9% SLA</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-8 pt-6 text-center">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} PT. Artacomindo Jejaring Nusa. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('PricingFooter component error:', error);
        reportError(error);
    }
}
