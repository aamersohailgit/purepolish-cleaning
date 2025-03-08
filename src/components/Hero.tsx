import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-cleaning.jpg"
          alt="Professional cleaning service"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-primary-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium mb-6 animate-fade-in">
            Professional Cleaning Services in Australia
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Exceptional Cleaning <span className="text-primary-300">Services</span> That Shine
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 animate-fade-in-delay max-w-2xl">
            Quality cleaning solutions for homes and businesses across Australia, delivered with care and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <Link
              href="#contact"
              className="btn-primary text-center sm:text-left"
            >
              Get a Free Quote
            </Link>
            <Link
              href="#services"
              className="btn-secondary bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 text-center sm:text-left"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-delay-2">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="bg-primary-500 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">Fully Insured</p>
                <p className="text-white/70 text-sm">Your property is protected</p>
              </div>
            </div>

            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="bg-primary-500 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">Satisfaction Guaranteed</p>
                <p className="text-white/70 text-sm">100% quality assurance</p>
              </div>
            </div>

            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="bg-primary-500 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">Fast Response</p>
                <p className="text-white/70 text-sm">Quick and reliable service</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <a href="#about" className="text-white/80 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  );
}