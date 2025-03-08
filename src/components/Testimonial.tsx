import Image from 'next/image';

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      quote: "PurePolish Cleaning has transformed how we maintain our office space. Their attention to detail is remarkable, and the team is always professional and thorough. Since hiring them, our workspace has never looked better, and our employees have noticed the difference. I highly recommend their services to any business looking for reliable, high-quality cleaning.",
      name: "Sarah Thompson",
      title: "Office Manager, Nexus Technologies",
      image: "/images/testimonial.jpg",
    },
    {
      id: 2,
      quote: "I've been using PurePolish for my end of lease cleanings for over 3 years now, and they've never let me down. Their team is punctual, thorough, and incredibly professional. Thanks to their meticulous work, I've always received my full bond back. I wouldn't trust anyone else with my rental properties.",
      name: "Michael Chen",
      title: "Property Investor",
      image: "/images/testimonial.jpg",
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-primary-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-300"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-primary-300 transform translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-48 h-48 rounded-full bg-primary-300"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-3">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card p-8 hover:shadow-medium transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-secondary-800">{testimonial.name}</h3>
                  <p className="text-secondary-600 text-sm">{testimonial.title}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-secondary-700 italic mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white p-6 rounded-lg shadow-soft">
            <h3 className="text-xl font-bold text-secondary-800 mb-2">Ready to experience our exceptional service?</h3>
            <p className="text-secondary-600 mb-6">Join our growing list of satisfied customers today.</p>
            <a
              href="#contact"
              className="btn-primary"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}