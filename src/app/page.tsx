import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonial from '@/components/Testimonial';
import ContactForm from '@/components/ContactForm';
import ServiceAreas from '@/components/ServiceAreas';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonial />
      <ContactForm />
      <ServiceAreas />
      <Footer />
    </main>
  );
}
