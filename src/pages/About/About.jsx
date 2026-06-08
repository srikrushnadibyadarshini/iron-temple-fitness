import { motion } from 'framer-motion'
import { FaShieldAlt, FaFire, FaTrophy, FaHeart } from 'react-icons/fa'
import PageTransition from '../../components/PageTransition'
import PageHeader from '../../components/PageHeader'
import Stats from '../../components/Stats/Stats'
import styles from './About.module.css'
const values = [
{ icon: FaShieldAlt, title: 'Integrity', desc: 'We hold ourselves to the highest standards — in coaching, programming, and the promises we make to every member.' },
{ icon: FaFire, title: 'Intensity', desc: 'We believe in purposeful intensity. Every workout is designed with scientific precision to maximize your time and results.' },
{ icon: FaTrophy, title: 'Excellence', desc: 'Mediocrity has no place here. From our facility to our staff, we settle for nothing less than the best.' },
{ icon: FaHeart, title: 'Community', desc: 'Iron Temple is more than a gym — it\'s a movement. A family of people pushing each other toward greatness.' },
]
const milestones = [
{ year: '2012', event: 'Iron Temple founded in Manhattan\'s Meatpacking District' },
{ year: '2014', event: 'Expanded to 25,000 sq ft, added Olympic lifting platforms' },
{ year: '2016', event: 'Launched signature HIIT Inferno program — became NYC\'s most searched class'
},
{ year: '2018', event: 'Opened Recovery Suite with cryo, sauna & cold plunge facilities' },
{ year: '2020', event: 'Launched Iron Temple digital app with remote coaching' },
{ year: '2022', event: 'Hit 5,000 active members, expanded to 50,000 sq ft' },
{ year: '2024', event: 'Named #1 Premium Gym in New York by Fitness Magazine' },
]
export default function About() {
return (
<PageTransition>
<PageHeader
tag="Our Story"
title="BUILT ON"
highlight="IRON"
subtitle="Every world-class facility begins with a singular vision. Ours was simple: create the most
transformative fitness environment on earth."
img="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=1920&h=600&fit=crop"
/>
<section className={`section-pad ${styles.story}`}>
<div className="container">
<div className={styles.storyGrid}>
<motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true
}}>
<span className="tag">The Origin</span>
<h2 className="section-title">WHERE IT <span className="red-text">BEGAN</span></h2>
<div className="gold-line" />
<p>Iron Temple was born from a simple frustration: elite athletes and everyday people deserved the
same caliber of training. In 2012, founder Marcus Steel — a former national powerlifting champion —
opened the doors to a 5,000 sq ft space in Manhattan with six barbells and an unshakeable belief that
the right environment could change lives.</p>
<br />
<p>Twelve years later, Iron Temple has grown into a 50,000 sq ft flagship facility with over 5,000
active members, a world-class coaching staff, and a reputation built entirely on one thing: results
that speak for themselves.</p>
<br />
<p>We don't promise quick fixes. We promise transformation through discipline, science, and community.
Every program, every coach, every square foot of this facility exists to serve one purpose — to help
you become the strongest version of yourself.</p>
</motion.div>
<motion.div className={styles.imgStack}
initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
<img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop" alt="Gym
floor" loading="lazy" />
<img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop"
alt="Weights" loading="lazy" className={styles.imgSmall} />
</motion.div>
</div>
</div>
</section>
<Stats />
<section className={`section-pad ${styles.values}`}>
<div className="container">
<motion.div className={styles.valHeader}
initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
<span className="tag">What We Stand For</span>
<h2 className="section-title">OUR CORE <span className="gold-text">VALUES</span></h2>
<div className="gold-line" />
</motion.div>
<div className={styles.valGrid}>
{values.map((v, i) => {
const Icon = v.icon
return (
<motion.div key={v.title} className={styles.valCard}
initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
<div className={styles.valIcon}><Icon /></div>
<h3 className={styles.valTitle}>{v.title}</h3>
<p className={styles.valDesc}>{v.desc}</p>
</motion.div>
)
})}
</div>
</div>
</section>
<section className={`section-pad ${styles.timeline}`}>
<div className="container">
<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true
}}>
<span className="tag">Our Journey</span>
<h2 className="section-title">IRON <span className="red-text">MILESTONES</span></h2>
<div className="gold-line" />
</motion.div>
<div className={styles.tlLine}>
{milestones.map((m, i) => (
<motion.div key={m.year} className={`${styles.tlItem} ${i % 2 === 0 ? styles.tlLeft :
styles.tlRight}`}
initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
<div className={styles.tlCard}>
<div className={styles.tlYear}>{m.year}</div>
<p className={styles.tlEvent}>{m.event}</p>
</div>
<div className={styles.tlDot} />
</motion.div>
))}
</div>
</div>
</section>
</PageTransition>
)
}