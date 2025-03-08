import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About PurePolish Cleaning</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl bg-blue-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Your Trusted Cleaning Partner
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded by Shyam with a vision to redefine cleaning standards across Australia,
              PurePolish Cleaning has grown to become a trusted name in professional cleaning services.
              We take pride in our attention to detail and commitment to excellence, ensuring every space
              we clean sparkles with perfection.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Our team of dedicated professionals is trained to deliver exceptional results using the latest
              techniques and eco-friendly products. Whether it's your home, office, or commercial space,
              we treat every property with the care and respect it deserves.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-600 p-3 rounded-full mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-1">Fully Insured</h4>
                <p className="text-gray-600 text-center text-sm">Your property is protected</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-600 p-3 rounded-full mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-1">Trained Professionals</h4>
                <p className="text-gray-600 text-center text-sm">Expert cleaning staff</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-600 p-3 rounded-full mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-1">Satisfaction Guaranteed</h4>
                <p className="text-gray-600 text-center text-sm">100% quality assurance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}