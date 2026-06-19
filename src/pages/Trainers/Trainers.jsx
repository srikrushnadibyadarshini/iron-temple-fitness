import PageTransition from '../../components/PageTransition'
import PageHeader from '../../components/PageHeader/PageHeader'
import TrainersSection from '../../components/Trainers/TrainersSection'
export default function Trainers() {
return (
<PageTransition>
<PageHeader
tag="Expert Coaches"
title="MEET THE"
highlight="TRAINERS"
subtitle="Our certified coaches bring decades of combined experience and a relentless commitment to
your success."
img="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&h=600&fit=crop"
/>
<TrainersSection />
</PageTransition>
)
}
