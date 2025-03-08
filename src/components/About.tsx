import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-3">About Us</span>
          <h2 className="section-title">About PurePolish Cleaning</h2>
          <p className="section-subtitle">
            Delivering exceptional cleaning services with a focus on quality, reliability, and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-medium">
            <Image
              src="/images/about-cleaning.jpg"
              alt="PurePolish Cleaning Team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-soft inline-block">
                <p className="text-primary-800 font-bold text-lg">10+ Years Experience</p>
                <p className="text-secondary-600">Trusted by thousands of clients</p>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-secondary-800 mb-6">
              Your Trusted Cleaning Partner in Australia
            </h3>

            <div className="space-y-6 text-secondary-600">
              <p className="leading-relaxed">
                Founded by Shyam with a vision to redefine cleaning standards across Australia,
                PurePolish Cleaning has grown to become a trusted name in professional cleaning services.
                We take pride in our attention to detail and commitment to excellence, ensuring every space
                we clean sparkles with perfection.
              </p>

              <p className="leading-relaxed">
                Our team of dedicated professionals is trained to deliver exceptional results using the latest
                techniques and eco-friendly products. Whether it's your home, office, or commercial space,
                we treat every property with the care and respect it deserves.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-soft border border-primary-100 hover:border-primary-300 transition-colors">
                <div className="bg-primary-100 text-primary-700 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-secondary-800 mb-2">Fully Insured</h4>
                <p className="text-secondary-600">Your property is protected with our comprehensive insurance coverage</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-soft border border-primary-100 hover:border-primary-300 transition-colors">
                <div className="bg-primary-100 text-primary-700 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-secondary-800 mb-2">Trained Professionals</h4>
                <p className="text-secondary-600">Our expert cleaning staff is thoroughly trained and background checked</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-soft border border-primary-100 hover:border-primary-300 transition-colors">
                <div className="bg-primary-100 text-primary-700 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-secondary-800 mb-2">Satisfaction Guaranteed</h4>
                <p className="text-secondary-600">We're not happy until you're completely satisfied with our service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}