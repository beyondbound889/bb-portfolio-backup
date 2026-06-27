import { Navbar } from "@/components/nav/Navbar";
import { Hero } from "@/components/sections/Hero";
import CredentialsBelt from "@/components/sections/CredentialsBelt";
import PhilosophyQuoteSection from "@/components/sections/PhilosophyQuoteSection";
import { HealthcareGap } from "@/components/sections/HealthcareGap";
import { Philosophy } from "@/components/sections/Philosophy";
import EnhancedJourneySection from "@/components/sections/EnhancedJourneySection";
import { FirstHandEfficacy } from "@/components/sections/FirstHandEfficacy";
import { BeyondBound } from "@/components/sections/BeyondBound";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { CGMSection } from "@/components/sections/CGMSection";
import { Impact } from "@/components/sections/Impact";
import { Focus } from "@/components/sections/Focus";
import InstagramVideoSection from "@/components/sections/InstagramVideoSection";
import { Insights } from "@/components/sections/Insights";
import { Values, Media } from "@/components/sections/ValuesMedia";
import { Personal } from "@/components/sections/PersonalVision";
import FutureVisionSection from "@/components/sections/FutureVisionSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

/**
 * Homepage — narrative IA (Phase 7 redesign).
 *
 * The page is organised as one continuous founder story rather than a stack of
 * imported sections. Movements:
 *
 *   I    OPEN ............ cinematic hero + an instant credibility strip
 *   II   THE FRAME ....... the one-line thesis that governs everything
 *   III  THE PROBLEM ..... why metabolic health matters, now
 *   IV   THE PERSON ...... origin (why), then the road that built the conviction
 *   V    THE CONVICTION .. the creed, proven on himself first  ← new beat
 *   VI   COMPANY+SYSTEM .. what he built, with the signature interactive moment
 *   VII  THE EVIDENCE .... the data behind the conviction
 *   VIII THE BREADTH ..... areas of focus, founder in action
 *   IX   VOICE+VALIDATION  writing, principles, recognition
 *   X    HUMAN+HORIZON ... the person off the label, then the vision
 *   XI   CONTACT
 *
 * No section was deleted; only the order changed and <FirstHandEfficacy/> was
 * added. See the implementation summary for the rationale behind each move and
 * for the flagged follow-ups (e.g. CredentialsBelt vs Impact stat overlap).
 */
export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        {/* I · OPEN */}
        <Hero />
        <CredentialsBelt />

        {/* II · THE FRAME — "Health advice is easy to give. Trust is harder to earn." */}
        <PhilosophyQuoteSection />

        {/* III · THE PROBLEM — the insight: India's quiet metabolic epidemic */}
        <HealthcareGap />

        {/* IV · THE PERSON — why I started building, then the journey */}
        <Philosophy />
        <EnhancedJourneySection />

        {/* V · THE CONVICTION — proving it on myself first (creed + self-observation footage) */}
        <FirstHandEfficacy />

        {/* VI · COMPANY + SYSTEM — Beyond Bound, then the signature sticky-scroll payoff */}
        <BeyondBound />
        <Ecosystem />

        {/* VII · THE EVIDENCE — the glucose data, then the numbers */}
        <CGMSection />
        <Impact />

        {/* VIII · THE BREADTH — areas of focus, founder in action */}
        <Focus />
        <InstagramVideoSection />

        {/* IX · VOICE + VALIDATION — writing, principles, recognition */}
        <Insights />
        <Values />
        <Media />

        {/* X · HUMAN + HORIZON — the person off the label, then the 2035 vision */}
        <Personal />
        <FutureVisionSection />

        {/* XI · CONTACT */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
