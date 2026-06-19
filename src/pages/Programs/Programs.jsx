import PageTransition from '../../components/PageTransition'
import PageHeader from '../../components/PageHeader/PageHeader'
import ProgramsSection from '../../components/Programs/ProgramsSection'
import Schedule from '../../components/Schedule/Schedule'
import { motion } from 'framer-motion'
import styles from './Programs.module.css'
const perks = [
{ n: '01', t: 'Science-Based Programming', d: 'Every workout is built on peer-reviewed exercise science. No junk volume, no guesswork — just methods that work.' },
{ n: '02', t: 'Periodized Training', d: 'Our programs follow structured periodization cycles so you\'re always making progress and never plateau.' },
{ n: '03', t: 'App Integration', d: 'Track every session, log PRs, and monitor recovery metrics inside the Iron Temple app — available on iOS and Android.' },
{ n: '04', t: 'Progress Reviews', d: 'Every 8 weeks your coach reviews your progress, updates your programming, and sets new targets with you.' },
]
export default function Programs() {
return (
<PageTransition>
<PageHeader
tag="Elite Training"
title="OUR"
highlight="PROGRAMS"
subtitle="Six distinct training methodologies, each engineered to deliver measurable results for a
specific goal."
img="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1920&h=600&fit=crop"
/>
<ProgramsSection />
<section className={`section-pad ${styles.why}`}>
<div className="container">
<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true
}}>
<span className="tag">Why Iron Temple</span>
<h2 className="section-title">THE <span className="gold-text">IRON DIFFERENCE</span></h2>
<div className="gold-line" />
</motion.div>
<div className={styles.perksGrid}>
{perks.map((p, i) => (
<motion.div key={p.n} className={styles.perk}
initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
<div className={styles.perkNum}>{p.n}</div>
<div>
<h3 className={styles.perkTitle}>{p.t}</h3>
<p className={styles.perkDesc}>{p.d}</p>
</div>
</motion.div>
))}
</div>
</div>
</section>
<Schedule />
</PageTransition>
)
}
