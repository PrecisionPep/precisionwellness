import { WhyProgramWorks } from '../components/WhyProgramWorks';
import { Hero } from '../components/Hero';
import { ReadyToTakeCommand } from '../components/ReadyToTakeCommand';
import { MembershipInfo } from '../components/MembershipInfo';
import { HealthConcerns } from '../components/HealthConcerns';
import { WellnessSolutionsGrid } from '../components/WellnessSolutionsGrid';
import { MembershipCards } from '../components/MembershipCards';
import { TeamSection } from '../components/TeamSection';
import { PeptideEducation } from '../components/PeptideEducation';
import { GLPCalculator } from '../components/GLPCalculator';
import { Results } from '../components/Results';
import { FAQ } from '../components/FAQ';
import { Guarantee } from '../components/Guarantee';
import { IntegrationCarousel } from '../components/IntegrationCarousel';

export function Home() {
  return (
    <>
      <Hero />
      <ReadyToTakeCommand />
      <IntegrationCarousel />
      <MembershipInfo />
      <HealthConcerns />
      <WellnessSolutionsGrid />
      <MembershipCards />
      <GLPCalculator />
      <TeamSection />
      <PeptideEducation />
      <WhyProgramWorks />
      <Results />
      <FAQ />
      <Guarantee />
    </>
  );
}

