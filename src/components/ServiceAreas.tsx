export default function ServiceAreas() {
  const majorCities = [
    'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide',
    'Gold Coast', 'Canberra', 'Newcastle', 'Wollongong', 'Hobart'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Service Areas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide professional cleaning services across major cities and regions in Australia
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {majorCities.map((city, index) => (
              <div
                key={index}
                className="bg-blue-50 rounded-lg p-4 text-center transition-all duration-300 hover:bg-blue-100"
              >
                <span className="text-gray-900 font-medium">{city}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-700">
              Don't see your location? We serve many other areas across Australia.
              <br className="hidden md:block" />
              Contact us to check if we service your area.
            </p>
          </div>

          <div className="mt-12 bg-blue-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Nationwide Commercial Services</h3>
            <p className="text-lg mb-6">
              For commercial clients, we offer services throughout Australia with our network of trusted cleaning professionals.
            </p>
            <div className="inline-flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-xl font-semibold">1300 POLISH (765 474)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}