import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { testimonials } from '../../data/index'
import styles from './Testimonials.module.css'
export default function Testimonials() {
const [index, setIndex] = useState(0)
const [dir, setDir] = useState(1)
const go = (d) => {
setDir(d)
setIndex(i => (i + d + testimonials.length) % testimonials.length)
}
return (
<section className={`section-pad ${styles.section}`}>
<div className="container">
<motion.div className={styles.header}
initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
<span className="tag">Success Stories</span>
<h2 className="section-title">REAL RESULTS, <span className="gold-text">REAL PEOPLE</span></h2>
<div className="gold-line" />
</motion.div>
<div className={styles.sliderWrap}>
<AnimatePresence mode="wait" custom={dir}>
{testimonials.map((t, i) => i === index && (
<motion.div key={t.id} className={styles.slide}
custom={dir}
initial={{ opacity: 0, x: dir * 60 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: dir * -60 }}
transition={{ duration: 0.4 }}>
<FaQuoteLeft className={styles.quote} />
<p className={styles.text}>{t.text}</p>
<div className={styles.stars}>
{[...Array(t.rating)].map((_, j) => <FaStar key={j} />)}
</div>
<div className={styles.author}>
<img src={t.img} alt={t.name} loading="lazy" />
<div>
<strong>{t.name}</strong>
<span>{t.role}</span>
</div>
</div>
</motion.div>
))}
</AnimatePresence>
<div className={styles.controls}>
<button onClick={() => go(-1)} aria-label="Previous"><FaChevronLeft /></button>
<div className={styles.dots}>
{testimonials.map((_, i) => (
<button key={i} className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
onClick={() => { setDir(i > index ? 1 : -1); setIndex(i) }} aria-label={`Go to ${i+1}`} />
))}
</div>
<button onClick={() => go(1)} aria-label="Next"><FaChevronRight /></button>
</div>
</div>
<div className={styles.grid}>
{[
{ stat: '45 lbs', label: 'Average Weight Loss (6mo)' },
{ stat: '3x', label: 'Average Strength Increase' },
{ stat: '8 wks', label: 'Visible Results Timeline' },
{ stat: '98%', label: 'Would Recommend to Friends' },
].map((s, i) => (
<motion.div key={s.label} className={styles.proofCard}
initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
<div className={styles.proofStat}>{s.stat}</div>
<div className={styles.proofLabel}>{s.label}</div>
</motion.div>
))}
</div>
</div>
</section>
)
}