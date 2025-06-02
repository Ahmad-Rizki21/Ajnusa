function NetworkMap() {
    try {
        const mapRef = React.useRef(null);
        const mapInstanceRef = React.useRef(null);
        const markersRef = React.useRef([]);

        const locations = [
            // { id: 1, name: 'DC Jakarta', lat: -6.2088, lng: 106.8456, type: 'distributioncenter', onlineDevices: 2 },
            { id: 2, name: 'DC Balara', lat: -6.2115, lng: 106.8610, type: 'distributioncenter', onlineDevices: 62 },
            { id: 3, name: 'DC Bali', lat: -8.6500, lng: 115.2167, type: 'distributioncenter', onlineDevices: 33 },
            { id: 4, name: 'DC Bandung', lat: -6.9175, lng: 107.6191, type: 'distributioncenter', onlineDevices: 62 },
            { id: 5, name: 'DC Banjarmasin', lat: -3.3167, lng: 114.5833, type: 'distributioncenter', onlineDevices: 82 },
            { id: 6, name: 'DC Bekasi', lat: -6.2347, lng: 106.9896, type: 'distributioncenter', onlineDevices: 13 },
            { id: 7, name: 'DC Bogor', lat: -6.5971, lng: 106.8060, type: 'distributioncenter', onlineDevices: 20 },
            { id: 8, name: 'DC Cianjur', lat: -6.8403, lng: 107.1403, type: 'distributioncenter', onlineDevices: 25 },
            { id: 9, name: 'DC Cikokol', lat: -6.2333, lng: 106.6167, type: 'distributioncenter', onlineDevices: 0 },
            { id: 10, name: 'DC Cilacap', lat: -7.7258, lng: 109.0089, type: 'distributioncenter', onlineDevices: 42 },
            { id: 11, name: 'DC Cileunyi', lat: -6.9500, lng: 107.7500, type: 'distributioncenter', onlineDevices: 3 },
            { id: 12, name: 'DC Jatim', lat: -7.4667, lng: 112.7333, type: 'distributioncenter', onlineDevices: 76 },
            { id: 13, name: 'DC Karawang', lat: -6.3167, lng: 107.3167, type: 'distributioncenter', onlineDevices: 45 },
            { id: 14, name: 'DC Klaten', lat: -7.7000, lng: 110.6000, type: 'distributioncenter', onlineDevices: 25 },
            { id: 15, name: 'DC Manado', lat: 1.4833, lng: 124.8333, type: 'distributioncenter', onlineDevices: 27 },
            { id: 16, name: 'DC Parung', lat: -6.4167, lng: 106.7333, type: 'distributioncenter', onlineDevices: 46 },
            { id: 17, name: 'DC Pontianak', lat: 0.0333, lng: 109.3333, type: 'distributioncenter', onlineDevices: 33 },
            { id: 18, name: 'DC Rembang & Madiun', lat: -6.7167, lng: 111.3667, type: 'distributioncenter', onlineDevices: 68 },
            { id: 19, name: 'DC Serang', lat: -6.1167, lng: 106.1500, type: 'distributioncenter', onlineDevices: 33 },
            { id: 20, name: 'DC Sidoarjo', lat: -7.4500, lng: 112.7167, type: 'distributioncenter', onlineDevices: 49 },
            { id: 21, name: 'DC Sumatra Area', lat: -0.5000, lng: 101.0000, type: 'distributioncenter', onlineDevices: 53 },
            // { id: 22, name: 'TransTel', lat: -6.2000, lng: 106.8167, type: 'distributioncenter', onlineDevices: 125 }
        ];

        React.useEffect(() => {
            if (mapRef.current && !mapInstanceRef.current) {
                mapInstanceRef.current = L.map(mapRef.current, {
                    center: [-2.5, 118],
                    zoom: 5,
                    zoomControl: true,
                    scrollWheelZoom: true
                });

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap contributors',
                    maxZoom: 18
                }).addTo(mapInstanceRef.current);

                setTimeout(() => {
                    if (mapInstanceRef.current) {
                        mapInstanceRef.current.invalidateSize();
                    }
                }, 100);
            }

            return () => {
                if (mapInstanceRef.current) {
                    mapInstanceRef.current.remove();
                    mapInstanceRef.current = null;
                }
            };
        }, []);

        React.useEffect(() => {
            if (mapInstanceRef.current) {
                markersRef.current.forEach(marker => mapInstanceRef.current.removeLayer(marker));
                markersRef.current = [];

                locations.forEach(location => {
                    const icon = L.divIcon({
                        className: 'custom-marker',
                        html: `<div style="background-color: #059669; 
                               width: 20px; 
                               height: 20px; 
                               border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>`,
                        iconSize: [20, 20],
                        iconAnchor: [10, 10]
                    });

                    const marker = L.marker([location.lat, location.lng], { icon })
                        .bindPopup(`<b>${location.name}</b><br/>Distribution Center${location.onlineDevices ? `<br/>Online Devices: ${location.onlineDevices}` : ''}`)
                        .addTo(mapInstanceRef.current);

                    markersRef.current.push(marker);
                });
            }
        }, []);

        return (
            <section id="network-map" data-name="network-map" data-file="components/NetworkMap.js" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 fade-in">
                        <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            <i className="fas fa-map-marked-alt mr-2"></i>
                            Network Coverage
                        </div>
                        <h2 className="text-5xl font-bold text-gray-800 mb-6">Sebaran Jaringan SD-WAN</h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-8 rounded-full"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Jaringan SD-WAN kami melayani ribuan lokasi distribusi di seluruh Indonesia
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
                        <div 
                            ref={mapRef} 
                            className="w-full rounded-2xl shadow-lg border border-gray-200"
                            style={{ height: '400px', minHeight: '400px' }}
                        ></div>

                        <div className="grid md:grid-cols-1 gap-8 mt-8">
                            <div className="text-center">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                                    <span className="font-semibold text-gray-700">Distribution Center</span>
                                </div>
                                <p className="text-gray-600">Hub utama untuk distribusi jaringan SD-WAN</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('NetworkMap component error:', error);
        reportError(error);
    }
}