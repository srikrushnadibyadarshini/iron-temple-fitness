import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaPlay, FaArrowRight } from 'react-icons/fa'
import styles from './Hero.module.css'
export default function Hero() {
return (
<section className={styles.hero}>
<div className={styles.bg}>
<img
src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop"
alt="Iron Temple Gym"
loading="eager"
/>
<div className={styles.overlay} />
<div className={styles.noise} />
</div>
<div className={styles.redAccent} />
<div className={`container ${styles.content}`}>
<motion.div
className={styles.tagline}
initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
>
<span className={styles.dot} />
<span>EST. 2012 — NEW YORK'S PREMIER FITNESS CLUB</span>
</motion.div>
<motion.h1 className={styles.title}
initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
<span>FORGE YOUR</span>
<span className={styles.highlight}>LEGACY</span>
<span>IN IRON</span>
</motion.h1>
<motion.p className={styles.sub}
initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
Elite training. World-class coaches. A community that forges champions.
Your transformation starts the moment you walk through our doors.
</motion.p>
<motion.div className={styles.actions}
initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}>
<Link to="/membership" className="btn-primary">
Start Free Trial <FaArrowRight />
</Link>
<Link to="/programs" className="btn-outline">
<FaPlay style={{ fontSize: '12px' }} /> Explore Programs
</Link>
</motion.div>
<motion.div className={styles.badges}
initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
{['50,000 sqft Facility', 'Expert Coaching', 'No Contracts'].map(b => (
<div key={b} className={styles.badge}>
<span className={styles.badgeDot} />
{b}
</div>
))}
</motion.div>
</div>
<motion.div className={styles.scroll}
initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
<div className={styles.scrollLine} />
<span>SCROLL</span>
</motion.div>
</section>
)
}