function About() {
    try {
        return (
            <section id="about" data-name="about" data-file="components/About.js" className="py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20 fade-in">
                        <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            <i className="fas fa-info-circle mr-2"></i>
                            Tentang Perusahaan
                        </div>
                        <h2 className="text-5xl font-bold text-gray-800 mb-6">Siapa Kami</h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            <strong>Artacomindo Jejaring Nusa (Artacom)</strong> didirikan oleh para profesional di bidangnya masing-masing. 
                            Artacom mempunyai SDM yang berpengalaman di bidang <strong>Satellite Communications</strong> selama hampir <strong>10 tahun</strong>.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 mb-20">
                        <div className="slide-in-left">
                            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                                <div className="flex items-center mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                                        <i className="fas fa-eye text-white text-2xl"></i>
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-800">Visi Kami</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Menjadi Perusahaan <strong>Network Infrastructure Solution And Services</strong> Yang Mempunyai 
                                    Implementasi HUB Yang Tersebar Dan Terintegrasi Dengan <strong>Performance Optimal</strong>, Dan Terpercaya.
                                </p>
                            </div>
                        </div>

                        <div className="slide-in-right">
                            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-green-600"></div>
                                <div className="flex items-center mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                                        <i className="fas fa-bullseye text-white text-2xl"></i>
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-800">Misi Kami</h3>
                                </div>
                                <ul className="text-gray-600 space-y-4">
                                    {[
                                        "Memberikan solusi sistem terintegrasi dengan perencanaan strategis bisnis customer",
                                        "Meningkatkan pelayanan dengan Service Level Agreement yang optimal", 
                                        "Mengembangkan kualitas SDM dari sisi teamwork dan kemampuan teknis"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-lg">
                                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                                <i className="fas fa-check text-green-600 text-sm"></i>
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center fade-in">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-3xl shadow-xl max-w-4xl mx-auto">
                            <h3 className="text-2xl font-bold mb-4">Komitmen Kami</h3>
                            <p className="text-xl">
                                <strong>Kami Berkomitmen Terhadap Layanan Yang Kami Berikan</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        reportError(error);
    }
}
