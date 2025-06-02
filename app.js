function App() {
    try {
        React.useEffect(() => {
            const handleScroll = () => {
                const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
                elements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;
                    
                    if (elementTop < window.innerHeight - elementVisible) {
                        element.classList.add('animate');
                    }
                });
            };

            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Check on initial load

            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        return (
            <div data-name="app" data-file="app.js">
                <Header />
                <Hero />
                <About />
                <Services />
                <NetworkMap />
                <Clients />
                <Contact />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
