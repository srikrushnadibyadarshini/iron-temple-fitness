import PageTransition from '../../components/PageTransition'
import Hero from '../../components/Hero/Hero'
import Stats from '../../components/Stats/Stats'
import ProgramsSection from '../../components/Programs/ProgramsSection'
import TrainersSection from '../../components/Trainers/TrainersSection'
import Testimonials from '../../components/Testimonials/Testimonials'
import BMICalculator from '../../components/BMICalculator/BMICalculator'
import FAQ from '../../components/FAQ/FAQ'
import CTABanner from './CTABanner'
export default function Home() {
return (
<PageTransition>
<Hero />
<Stats />
<ProgramsSection limit={3} />
<TrainersSection limit={2} />
<Testimonials />
<BMICalculator />
<FAQ />
<CTABanner />
</PageTransition>
)
}