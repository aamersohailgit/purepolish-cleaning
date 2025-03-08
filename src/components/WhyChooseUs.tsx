export default function WhyChooseUs() {
  const reasons = [
    {
      id: 1,
      title: 'Experienced, Reliable Professionals',
      description: 'Our team consists of highly trained and experienced cleaning professionals who take pride in their work. We are committed to delivering consistent, high-quality results on every job.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Attention to Detail on Every Job',
      description: 'We believe that the difference between good and exceptional cleaning is in the details. Our meticulous approach ensures that no corner is left untouched and every surface shines.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Quality Products and Equipment',
      description: 'We use only premium, eco-friendly cleaning products and state-of-the-art equipment to ensure effective cleaning while being mindful of your health and the environment.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the highest quality cleaning services with a focus on reliability, attention to detail, and customer satisfaction
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="bg-blue-50 rounded-lg p-8 text-center transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}