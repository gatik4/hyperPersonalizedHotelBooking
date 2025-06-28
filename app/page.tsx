import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import FeaturedStays from '@/components/sections/FeaturedStays';
import Newsletter from '@/components/sections/Newsletter';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <HowItWorks />
      <FeaturedStays />
      <Newsletter />
      <Footer />
    </main>
  );
}