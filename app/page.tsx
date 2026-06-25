import { Navbar } from "@/components/nav/Navbar";
import { Hero } from "@/components/sections/Hero";
import CredentialsBelt from "@/components/sections/CredentialsBelt";
import PhilosophyQuoteSection from "@/components/sections/PhilosophyQuoteSection";
import { Philosophy } from "@/components/sections/Philosophy";
import { HealthcareGap } from "@/components/sections/HealthcareGap";
import InstagramVideoSection from "@/components/sections/InstagramVideoSection";
import EnhancedJourneySection from "@/components/sections/EnhancedJourneySection";
import { CGMSection } from "@/components/sections/CGMSection";
import { Focus } from "@/components/sections/Focus";
import { BeyondBound } from "@/components/sections/BeyondBound";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Impact } from "@/components/sections/Impact";
import { Insights } from "@/components/sections/Insights";
import { Values, Media } from "@/components/sections/ValuesMedia";
import { Personal } from "@/components/sections/PersonalVision";
import FutureVisionSection from "@/components/sections/FutureVisionSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

/**
 * Homepage — reorganised to the Phase-3 narrative IA:
 *   1 Hero → 2 Founder narrative → 3 Journey → 4 Beyond Bound →
 *   5 Products & Ecosystem → 6 Philosophy/insight → 7 Insights & content →
 *   8 Contact → 9 Footer.
 *
 * Every strong section from the previous build is preserved; only the ORDER
 * changed and the new <Ecosystem/> was inserted at the "Products & Ecosystem"
 * beat. See HANDOFF.md → "Information architecture" for the full mapping and
 * the rationale for each move.
 */
export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1 · Hero — cinematic video, founder · builder · operator */}
        <Hero />

        {/* 2 · Founder narrative — proof, then voice, then the story */}
        <CredentialsBelt />
        <PhilosophyQuoteSection />
        <Philosophy />

        {/* 3 · Journey — the cinematic, scroll-driven timeline */}
        <EnhancedJourneySection />

        {/* The market insight that sets up the company */}
        <HealthcareGap />
        <Focus />

        {/* 4 · Beyond Bound — the company + Glycomics™ */}
        <BeyondBound />

        {/* 5 · Products & Ecosystem — the most memorable, sticky-scroll beat */}
        <Ecosystem />
        <CGMSection />
        <Impact />

        {/* 7 · Insights & content — founder in action, then writing */}
        <InstagramVideoSection />
        <Insights />

        {/* Supporting credibility: values, press, the person */}
        <Values />
        <Media />
        <Personal />
        <FutureVisionSection />

        {/* 8 · Contact */}
        <Contact />
      </main>
      {/* 9 · Footer */}
      <Footer />
    </>
  );
}
