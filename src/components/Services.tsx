import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Residential Cleaning',
      description: 'Comprehensive cleaning solutions for homes of all sizes. We ensure your living space is spotless, healthy, and comfortable.',
      image: '/images/residential-cleaning.jpg',
      link: '#contact',
    },
    {
      id: 2,
      title: 'Commercial Cleaning',
      description: 'Professional cleaning services for offices, retail spaces, and commercial properties. Create a clean, productive environment for your business.',
      image: '/images/commercial-cleaning.jpg',
      link: '#contact',
    },
    {
      id: 3,
      title: 'End of Lease Cleaning',
      description: 'Specialized cleaning service to ensure you get your bond back. We follow real estate agent-approved checklists for a thorough clean.',
      image: '/images/end-of-lease.jpg',
      link: '#contact',
    },
    {
      id: 4,
      title: 'Specialized Services',
      description: 'From carpet cleaning to window washing, we offer specialized cleaning services to address specific needs and challenging areas.',
      image: '/images/specialized-cleaning.jpg',
      link: '#contact',
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-3">Our Services</span>
          <h2 className="section-title">Professional Cleaning Services</h2>
          <p className="section-subtitle">
            We offer a wide range of professional cleaning services tailored to your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="card card-hover group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-secondary-600 mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium transition-colors"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl shadow-soft text-center">
          <h3 className="text-2xl font-bold text-secondary-800 mb-4">Need a Custom Cleaning Solution?</h3>
          <p className="text-secondary-600 max-w-3xl mx-auto mb-8">
            We understand that every space is unique. Contact us to discuss your specific cleaning requirements and we'll create a tailored solution just for you.
          </p>
          <Link
            href="#contact"
            className="btn-primary"
          >
            Request a Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
}