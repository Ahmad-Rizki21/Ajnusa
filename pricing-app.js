function PricingApp() {
    try {
        return (
            <div data-name="pricing-app" data-file="pricing-app.js" className="min-h-screen">
                <PricingHeader />
                <PricingContent />
                <PricingFooter />
            </div>
        );
    } catch (error) {
        console.error('PricingApp component error:', error);
        reportError(error);
    }
}

const pricingRoot = ReactDOM.createRoot(document.getElementById('pricing-root'));
pricingRoot.render(React.createElement(PricingApp));
