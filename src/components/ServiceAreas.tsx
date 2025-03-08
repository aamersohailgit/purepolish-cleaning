export default function ServiceAreas() {
  const majorCities = [
    'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide',
    'Gold Coast', 'Canberra', 'Newcastle', 'Wollongong', 'Hobart'
  ];

  return (
    <section className="py-20 bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-3">Service Areas</span>
          <h2 className="section-title">Where We Operate</h2>
          <p className="section-subtitle">
            We provide professional cleaning services across major cities and regions in Australia
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {majorCities.map((city, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-secondary-800 font-medium">{city}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-secondary-600">
              Don't see your location? We serve many other areas across Australia.
              <br className="hidden md:block" />
              Contact us to check if we service your area.
            </p>
          </div>

          <div className="mt-16 bg-primary-600 text-white rounded-xl p-10 text-center shadow-medium">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Nationwide Commercial Services</h3>
              <p className="text-lg mb-8 text-white/90">
                For commercial clients, we offer services throughout Australia with our network of trusted cleaning professionals. No matter where your business is located, we can help maintain a clean, professional environment.
              </p>
              <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-xl font-semibold">1300 POLISH (765 474)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}