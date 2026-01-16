import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import AttentionSection from '@/components/AttentionSection';
import FeaturesSection from '@/components/FeaturesSection';
import AfterLaunchSection from '@/components/AfterLaunchSection';
import SuccessStoriesCarousel from '@/components/SuccessStoriesCarousel';
import PricingSection from '@/components/PricingSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <AttentionSection />
        <FeaturesSection />
        <AfterLaunchSection />
        <SuccessStoriesCarousel />
        <PricingSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
